import DenonConnection from './backend/denon/connection.js';
import ExpressApi from './backend/express/api.js';
import WebSocketServer from './backend/websockets/server.js';
import setPort from './backend/bootstrap-frontend.js';

const avr_host = process.argv[2];
const web_port = process.argv[3];
const ws_port = process.argv[4];
const denon = new DenonConnection(avr_host, 23);
const expressapi = new ExpressApi(denon, web_port);
const socketServer = new WebSocketServer(denon, ws_port);

await setPort(ws_port);

expressapi.start();
socketServer.start();
