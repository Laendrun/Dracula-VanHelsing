import Card from './Card.js'
import User from './User.js'

/* Roles:
 * 0: DRACULA
 * 1: VAN HELSING
 */

/**
 * Game contains all information about a game
 * - Username 1
 * - Username 2
 * - Player 1 cards
 * - Player 2 cards
 * - Cards in the deck
 * - Discarded deck
 * - Colors order
 * - Dracula health left
 * - Villagers by district
 * - Vampires by district
 */
export default class Game {
	constructor(username, socket, id) {
		this.gameId = id
		this.colors = ['Y', 'R', 'B', 'P']
		this.users = [new User(username, socket)]
		this.draculaCards = []
		this.vanHelsingCards = []
		this.deck = this.initDeck()
		this.draculaHealth = 12
		this.districts = [
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		]
		this.currStage = 0
		this.discardedCards = []
		this.roleToPlay = 0
		this.status = 'waiting'
	}

	start() {
		console.log('starting game with id: %s', this.gameId)
		this.colorOrder = this.pickColors()
		this.pickDracula()
		this.dealCards()

		this.sendGameStartToPlayers()
	}

	initDeck() {
		let d = []

		this.colors.forEach((c) => {
			for (let i = 1; i < 9; i++) {
				d.push(new Card(c, i))
			}
		})
		this.shuffleArray(d)
		return d
	}

	shuffleArray(arr) {
		let currIdx = arr.length

		while (currIdx != 0) {
			let randomIdx = Math.floor(Math.random() * currIdx);
			currIdx--;

			[arr[currIdx], arr[randomIdx]] = [arr[randomIdx], arr[currIdx]]
		}
	}

	pickColors() {
		let c = []
		for (let i = 0; i < this.colors.length; i++) {
			c.push(this.colors[i])
		}
		this.shuffleArray(c)
		return c
	}
	
	pickDracula() {
		let rnd = Math.round(Math.random())
		if (rnd) {
			this.users[0].role = 1
			this.users[1].role = 0
			return
		}
		this.users[0].role = 0
		this.users[1].role = 1
	}

	dealCards() {
		for (let i = 0; i < 5; i++) {
			this.draculaCards.push(this.deck.pop())
			this.vanHelsingCards.push(this.deck.pop())
		}
	}

	drawCard() {
		return this.deck.pop()
	}

	replaceDistrictCard(d, newCard) {
		if (this.roleToPlay == 0) {
			this.discardedCards.push(this.draculaCards[d])
			this.draculaCards[d] = newCard
			return
		}
		this.discardedCards.push(this.vanHelsingCards[d])
		this.vanHelsingCards[d] = newCard
	}

	discardCard(newCard) {
		this.discardedCards.push(newCard)
	}

	playDiscardedCardAction() {
		let lastDiscarded = this.discardedCards[this.discardedCards.length - 1]
		let changePlayer = true
		switch (lastDiscarded.value) {
			case 1:
				this.showSelfCard();
				break;
			case 2:
				this.showDeckCard();
				break;
			case 3:
				this.showOpponentCard();
				break;
			case 4:
				this.exchangeOwnCard();
				break;
			case 5:
				changePlayer = false;
				this.replay();
				break;
			case 6:
				this.switchDistrictCardWithOpponent();
				break;
			case 7:
				this.switchHighestColor();
				break;
			case 8:
				this.endStage();
				break;
			default:
				console.error(`Unknow card value`);
		}

		this.roleToPlay = changePlayer ? (this.roleToPlay + 1) % 2 : this.roleToPlay
	}

	showSelfCard() {
		console.log(`Show one of your card.`);
	}
	showDeckCard() {
		console.log(`Show the first card of the deck.`)
	}
	showOpponentCard() {
		console.log(`Show one card of your opponent.`)
	}
	exchangeOwnCard() {
		console.log(`Switch the position of two of your cards.`)
	}
	replay() {
		console.log(`Draw another card and play another round.`)
	}
	switchDistrictCardWithOpponent() {
		console.log(`Switch one of your card with the opponent's card for the same district, statuses of cards stay the same (shown/hidden)`)
	}
	switchHighestColor() {
		console.log(`Choose the new highest color, current color will replace it.`)
	}
	endStage() {
		console.log(`If there are enough cards in the discard pile, the stage ends now and we reveal the cards.`)
	}

	addUser(u, s) {
		console.log('adding user %s to game id %s.', u, this.gameId)

		this.users.push(new User(u, s))
		this.status = 'ready'

		// console.log('Current room users:', rooms[room]); // Log all sockets in the room
		// console.log('Current game users:', games[room].users); // Log all users in the game

		this.start()
	}

	sendGameStartToPlayers() {
		const dracula = this.getUserByRole('DRACULA');
		const ds = dracula.socket;
		const dc = this.draculaCards;
	
		const dobj = {
			type: 'game',
			params: {
				cards: dc,
				role: 'DRACULA',
				gameStatus: 'ready',
				gameId: this.gameId,
			},
		};
	
		setTimeout(() => {
			try {
				if (ds.readyState === WebSocket.OPEN) {
					ds.send(JSON.stringify(dobj));
					console.log('Message successfully sent to Dracula.');
				} else {
					console.error('Dracula socket is not open.');
				}
			} catch (err) {
				console.error('Error sending message to Dracula:', err);
			}
		}, 1000); // Delay ensures the WebSocket connection is fully ready
			
		const vanhelsing = this.getUserByRole('VANHELSING');
		const vhs = vanhelsing.socket;
		const vhc = this.vanHelsingCards;
	
		const vhobj = {
			type: 'game',
			params: {
				cards: vhc,
				role: 'VANHELSING',
				gameStatus: 'ready',
				gameId: this.gameId,
			},
		};
	
		console.log('Sending update to Van Helsing:', vanhelsing.username);
		setTimeout(() => {
			try {
				if (vhs.readyState === WebSocket.OPEN) {
					vhs.send(JSON.stringify(vhobj));
					console.log('Message successfully sent to Van Helsing.');
				} else {
					console.error('Van Helsing socket is not open.');
				}
			} catch (err) {
				console.error('Error sending message to Van Helsing:', err);
			}
		}, 1000); // Delay ensures the WebSocket connection is fully ready
	}
	

	// sendGameStartToPlayers() {
	// 	// get dracula socket
	// 	// get dracula cards
	// 	// send dracula cards and game status ready to dracula
	// 	const dracula = this.getUserByRole('DRACULA')
	// 	const ds = dracula.socket
	// 	const dc = this.draculaCards

	// 	const dobj = {
	// 		'type': 'game',
	// 		'params': {
	// 			'cards': dc,
	// 			'role': 'DRACULA',
	// 			'gameStatus': 'ready',
	// 			'gameId': this.gameId
	// 		}
	// 	}
	// console.log('sending update to dracula (%s)', dracula.username)
	// 	ds.send(JSON.stringify(dobj))

	// 	// get van helsing socket
	// 	// get van helsing cards
	// 	// send van helsing cards and game status ready to van helsing
	// 	const vanhelsing = this.getUserByRole('VANHELSING')
	// 	const vhs = vanhelsing.socket
	// 	const vhc = this.vanHelsingCards

	// 	const vhobj = {
	// 		'type': 'game',
	// 		'params': {
	// 			'cards': vhc,
	// 			'role': 'VANHELSING',
	// 			'gameStatus': 'ready',
	// 			'gameId': this.gameId
	// 		}
	// 	}
	// 	console.log('sending update to van helsing (%s)', vanhelsing.username)
	// 	if (!vhs) {
	// 		console.error(`socket for van helsing not defined...`)
	// 		return
	// 	}
	// 	vhs.send(JSON.stringify(vhobj))

	// }

	getUserByRole(role) {
		if (role == 'DRACULA') {
			return this.users.filter((u) => u.role == 0)[0]
		}
		return this.users.filter((u) => u.role == 1)[0]
	}

	getRoleToPlay () {
		console.log(`Role To Play: ${this.roleToPlay ? 'VAN HELSING' : 'DRACULA'}`)
		return this.roleToPlay
	}
}