import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  players = [
    { name: 'Player 1', points: 0 },
    { name: 'Player 2', points: 0 },
  ];
  cards: { value: string; isFlipped: boolean; isMatched: boolean }[] = [];
  isGameFinished = false;

  constructor() {
    this.startNewGame();
  }
  ngOnInit(): void {
  }
  startNewGame() {
    // Initialize the cards array and other necessary variables
    this.isGameFinished = false;
    // Shuffle the cards (you can implement a shuffle function)
    // Assign the cards to the board
  }

  onCardClick(card: any) {
    // Handle the card click logic (flipping, matching, scoring, etc.)
    // Check if the game is finished
    // Update player points and switch turns
  }

}
