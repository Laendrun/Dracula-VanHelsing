let connected = false;
const socket = new WebSocket('ws://192.168.1.50:3000/')

socket.onopen = function(e) {
	console.log(`You're connected to the server via ws.`)
	connected = true;
}

socket.onclose = function(e) {
	console.log(`You're now disconnected from the server.`)
	connected = false
}

const createRoom = () => {
	// let roomId = document.getElementById('roomId').value//.innerText
	let username = document.getElementById('username').value//.innerText

	// console.log(roomId)
	// console.log(username)

	let msg = `{ "type": "create", "params": { "username": "${username}" } }`
	// console.log(msg)

	socket.send(msg);
}

const joinRoom = () => {
	let roomId = document.getElementById('roomId').value
	let username = document.getElementById('username').value

	let msg = `{ "type": "join", "params": { "roomId": "${roomId}", "username": "${username}"}}`

	socket.send(msg)
}
