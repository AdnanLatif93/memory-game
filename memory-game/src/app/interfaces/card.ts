
export interface CardListInterface {
  cards?: Card[]
  player1Score: number
  player2Score: number
  currentPlayer?: string
}

export interface Card {
  id: number
  content: string
  isFlipped: boolean
  isMatched: boolean
  imageUrl: string
}