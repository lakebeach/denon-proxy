import DenonConnection from './backend/denon/connection.js';
import ExpressApi from './backend/express/api.js';
import WebSocketServer from './backend/websockets/server.js';

const avr_host = process.argv[2];
const web_port = process.argv[3];
const denon = new DenonConnection(avr_host, 23);
const expressapi = new ExpressApi(denon, web_port);
const socketServer = new WebSocketServer(denon, 9000);

expressapi.start();
socketServer.start();
