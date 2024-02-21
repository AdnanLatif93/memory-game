import { Component, OnInit } from '@angular/core';
import { CardsLookup } from 'src/app/constants/cards.lookup';
import { Card, CardListInterface } from 'src/app/interfaces/card';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  cardsLookup: Array<CardListInterface> = CardsLookup;
  isGameFinished = false;
  player1 = "Player 1";
  player2 = "Player 2";
  constructor() {
    this.startNewGame();
  }
  ngOnInit(): void {
  }
  startNewGame() {
    // Initialize the cards array and other necessary variables
    this.isGameFinished = false;
    this.cardsLookup[0].currentPlayer = this.player1;
    ;    // Shuffle the cards (you can implement a shuffle function)
    // Assign the cards to the board
  }

  flippedCards: Card[] = [];
  onCardClick(card: Card) {
    if (!card.isMatched && !card.isFlipped && this.flippedCards.length < 2) {
      card.isFlipped = true;
      this.flippedCards.push(card);
      if (this.flippedCards.length === 2) {
        const [firstCard, secondCard] = this.flippedCards;
        if (firstCard.content === secondCard.content) {
          setTimeout(() => {
            this.flippedCards.forEach((flippedCard) => (flippedCard.isMatched = true));
            this.flippedCards = [];
            if (this.cardsLookup[0].currentPlayer == this.player1) {
              this.cardsLookup[0].player1Score += 1;
            } else {
              this.cardsLookup[0].player2Score += 1;
            }
          }, 1000)
        } else {
          setTimeout(() => {
            this.flippedCards.forEach((flippedCard) => {
              flippedCard.isFlipped = false;
            });
            this.flippedCards = [];
          }, 1000);
          this.cardsLookup[0].currentPlayer = this.cardsLookup[0].currentPlayer === this.player2 ? this.player1 : this.player2;
        }
      }
    }
    const allCardsMatched = this.cardsLookup.every((group) =>
      group.cards?.every((c) => c.isMatched)
    );

    if (allCardsMatched) {
      this.isGameFinished = true;
    }
  }
}
