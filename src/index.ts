/**
 * @type {any}
 */
import http from 'http';
import { Server as StaticServer } from 'node-static';
import WebSocketServer from 'ws/lib/websocket-server';
// https://github.com/yjs/y-websocket/blob/master/bin/utils.js
import utils from 'y-websocket/bin/utils';
import { persistence } from './store';

const { setPersistence, setupWSConnection } = utils;

setPersistence(persistence as any);

const production = process.env.PRODUCTION != null;
const port = process.env.PORT || 8080;

const staticServer = new StaticServer('../public', {
  cache: production ? 3600 : false,
});

const server = http.createServer((request, response) => {
  request
    .addListener('end', () => {
      staticServer.serve(request, response);
    })
    .resume();
});
const wss = new WebSocketServer({ server });

wss.on('connection', (conn: any, req: any) =>
  setupWSConnection(conn, req, {
    gc: true,
  })
);

server.listen(port);

console.log(
  `Listening to http://localhost:${port} ${production ? '(production)' : ''}`
);
