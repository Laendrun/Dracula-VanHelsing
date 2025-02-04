import express from 'express'
import path from 'path';
import WebSocket, { WebSocketServer } from 'ws';
import { fileURLToPath } from 'url';

import Game from './src/Game.js'
import User from './src/User.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const wsServer = new WebSocketServer({ noServer: true })

const genKey = (len) => {
	let res = '';
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for (let i = 0; i < len; i++) {
		res += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return res;
}

/** Web Socket Part **/
const maxClients = 2
let rooms = {}

let games = {}

// https://www.programonaut.com/how-to-create-websocket-rooms-without-socket-io/

wsServer.on('error', (e) => console.error(e))

wsServer.on('connection', socket => {
	socket.on('message', (data) => {
		const obj = JSON.parse(data);
		const type = obj.type
		const params = obj.params;

		switch (type) {
			case 'create':
				create(params);
				break;
			case 'join':
				join(params);
				break;
			case 'leave':
				leave(params);
				break;
			case 'game':
				game(obj);
				break;
			default:
				generalHandle(obj);
				break;
		}
	});

	socket.on('close', (data) => {
		leave()
		// console.log(data)
	})

	const game = (o) => {
		if (o.method == 'req') {
			const game = games[o.params.roomId]
			let obj = {
				'type': 'game',
				'params': {
					'gameId': null
				}
			};
			if (game) obj.params.gameId = game.id
			socket.send(JSON.stringify(obj))
		}
	}

	const create = (params) => {
		let room;
	
		if (params.room) {
			room = params.room
		} else {
			do {
				room = genKey(5);
				console.log('New key generated: %s.', room)
			} while (rooms[room])
		}

		console.log('Definitive room id: %s', room)
		rooms[room] = [socket]
		games[room] = new Game(params.username, socket, room)

		// console.log(games[room])
		socket['room'] = room
		// generalInfo()
		successJoinMsg(games[room])
	}

	const join = (params) => {
		const room = params.roomId
		if (!Object.keys(rooms).includes(room)) {
			console.log(`Room '${room}' does not exist, creating it...`)
			create({ room })
		}

		if (rooms[room].length >= maxClients) {
			let obj = JSON.stringify({
				"type": "game",
				"params": {
					"roomId": null,
					"gameStatus": null
				}
			})
			socket.send(obj)
			return
		}

		rooms[room].push(socket)
		socket['room'] = room
		games[room].addUser(params.username, socket)

		// console.log('Current room users:', rooms[room]); // Log all sockets in the room
		// console.log('Current game users:', games[room].users); // Log all users in the game


		successJoinMsg(games[room])

		// generalInfo()
	}

	const leave = () => {
		const room = socket.room;

		if (rooms[room]) {
			const leftRooms = rooms[room].filter(so => so == socket).map(so => so.room);
			console.log('Left rooms: %s', JSON.stringify(leftRooms))
			rooms[room] = rooms[room].filter(so => so != socket);
		}
		socket['room'] = undefined
	}

	const generalInfo = () => {
		console.log('ROOM: %s', socket['room'])
	
		let obj;
		if (socket['room'] !== undefined) {
			obj = {
				"type": "info",
				"status": "success",
				"params": {
					"room": socket['room'],
					"clients": rooms[socket['room']].length
				}
			}
		} else {
			obj = {
				"type": "info",
				"status": "success",
				"params": {
					"room": "no room"
				}
			}
		}
		socket.send(JSON.stringify(obj));
	}

	const successJoinMsg = (game) => {
		let obj = {
			"type": "game",
			"status": "success",
			"params": {
				"roomId": socket['room'],
				"gameStatus": game.status
			}
		}

		socket.send(JSON.stringify(obj))
	}

	const generalHandle = (obj) => {
		socket.send(`{ "type": "info", "status": "warning", "params": { "description": "Unhandled message type received '${obj.type}'" } }`)
	}
})

/** End of Web Socket Part **/

const app = express()
const port = 3001

// app.use(express.json())
// http://192.168.1.50:3001/
app.use('/', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res, next) => {
// 	res.json({
// 		'status': 200,
// 		'statusText': 'Success',
// 		'data': {
// 			'message': 'Hello, World!'
// 		}
// 	})
// });

const server = app.listen(port || 3001, () => {
	console.log(`Server listening on port ${port}`)
})

server.on('upgrade', (request, socket, head) => {
	wsServer.handleUpgrade(request, socket, head, socket => {
		wsServer.emit('connection', socket, request);
	});
});