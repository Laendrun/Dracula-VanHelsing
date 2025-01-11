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
	constructor(u1, u2, id) {
		this.gameId = id
		this.colors = ['Y', 'R', 'B', 'P']
		this.users = [new User(u1), new User(u2)]
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
	}

	start() {
		this.colorOrder = this.pickColors()
		this.pickDracula()
		this.dealCards()
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

	getRoleToPlay () {
		console.log(`Role To Play: ${this.roleToPlay ? 'VAN HELSING' : 'DRACULA'}`)
		return this.roleToPlay
	}
}