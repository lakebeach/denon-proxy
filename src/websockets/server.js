import { WebSocketServer } from 'ws';
import { parse as parseRequest } from './request/index.js';
import { parse as parseResponse } from './response/index.js';

export default class Server {
  #clients;

  #denon;

  #disposeListener = null;

  #pongInterval;

  #pongTimeout = 30000;

  #port;

  #wss;

  constructor(denonConnection, port) {
    this.#clients = new Set();
    this.#denon = denonConnection;
    this.#port = port;
  }
  
  start = () => {
    this.#wss = new WebSocketServer({ port: this.#port });
    this.#wss.on('connection', (ws) => {
      this.#clients.add(ws);

      ws.isAlive = true;
      ws.on('ping', () => { 
        console.log('ping');
      });

      ws.on('pong', () => { 
        ws.isAlive = true;
        console.log('pong');
      });
    
      ws.on('message', async (message) => {
        const messageAsString = parseRequest(message);
        await this.#denon.connect();
        this.#denon.send(messageAsString);
      });
    
      ws.on('close', () => {
        console.log('connection closed');
        this.#clients.delete(ws);
      });
    });
    this.#wss.on('close', () => {
      clearInterval(this.#pongInterval);
    });
    this.#disposeListener = this.#denon.onResponse((command, value, type) => {
      const response = parseResponse(command, value, type);
      if(!response) {
        return;
      }
      this.#clients.forEach((client) => { client.send(response); });
    });
    this.#pongInterval = setInterval(() => {
      this.#wss.clients.forEach((ws) => {
        if (ws.isAlive === false) {
          return ws.terminate();
        } 
    
        ws.isAlive = false;
        ws.ping();
      });
    }, this.#pongTimeout);

    console.log('wss started');
  }

  stop = () => {
    if(this.#disposeListener) {
      this.#disposeListener();
      this.#disposeListener = null;
    }
    console.log('todo stop the rest!');
  }
}
