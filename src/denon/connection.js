import { EventEmitter } from 'node:events';
import { Socket } from 'node:net';
import { parse as parseInput } from "./helpers/request.js";
import { parse as parseResponse } from "./helpers/response.js";

export default class Connection {
  #eventEmitter;

  #host;

  #port;

  #queue;
  
  #queueId;

  #socket;

  constructor(host, port) {
    this.#host = host;
    this.#port = port;
    this.#queue = [];
    this.#eventEmitter = new EventEmitter();
  }

  close = async() => {
    this.#queue.length = 0;
    clearInterval(this.#queueId);
    this.#queueId = null;
    this.#socket.resetAndDestroy();
  }

  connect = async () => {
    if(this.#queueId) {
      return Promise.resolve();
    }
    if(!this.#socket || this.#socket.destroyed) {
      this.#socket = new Socket({ allowHalfOpen: true });
      this.#socket.setTimeout(250);
      this.#socket.setEncoding('utf8');
      this.#socket.on('error', (err) => {
        console.error(err);
      });
      this.#socket.on('data', (buffer) => {
        const data = buffer.toString().trim();
        try {
          const parsedData = parseResponse(data);
          this.#eventEmitter.emit('data', parsedData.command, parsedData.value, parsedData.type);
        } catch (e) {
          console.error(e, data);
        }
      });
      return this.connect();
    }
    switch(this.#socket?.readyState) {
      case 'opening': 
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (this.#socket?.readyState !== 'opening') {
              clearInterval(interval);
              resolve(this.connect());
            }
          }, 100);
        });
      case 'closed':
        return Promise.reject(new Error('connection closed'));
      default: {
        return new Promise((resolve) => {
          this.#socket.connect(this.#port, this.#host, () => {
            this.#queueId = setInterval(() => {
              const command = this.#queue.shift();
              if (!command) {
                return;
              }
              return this.#socket.write(command);
            }, 25);
            resolve();
          });
        });
      }
    }
  }

  onResponse = (cb) => {
    this.#eventEmitter.on('data', cb);
    return () => { this.#eventEmitter.off('data', cb); }
  }

  send = (input) => {    
    try {
      const instruction = parseInput(input);
      console.log('instruction:', instruction.replace('\r', '<CR>'));
      if (!this.#queue.includes(instruction)) {
        this.#queue.push(instruction);
      }
      return instruction;
    } catch (err) {
      console.log('invalid input', err);
      return;
    }
  };
};
