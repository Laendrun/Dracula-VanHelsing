import express from 'express'
import path from 'path';
import WebSocket, { WebSocketServer } from 'ws';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const maxClients = 2
let rooms = {}
const wsServer = new WebSocketServer({ noServer: true })
/** Web Socket Part **/

// https://www.programonaut.com/how-to-create-websocket-rooms-without-socket-io/

wsServer.on('connection', socket => {
	socket.on('message', (data) => {
		const obj = JSON.parse(data);
		const type = obj.type
		const params = obj.params;

		console.log(obj)
	});
})
/** End of Web Socket Part **/

const app = express()
const port = 3001

app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
	res.json({
		'status': 200,
		'statusText': 'Success',
		'data': {
			'message': 'Hello, World!'
		}
	})
});

const server = app.listen(port || 3001, () => {
	console.log(`Server listening on port ${port}`)
})

server.on('upgrade', (request, socket, head) => {
	wsServer.handleUpgrade(request, socket, head, socket => {
		wsServer.emit('connection', socket, request);
	});
});