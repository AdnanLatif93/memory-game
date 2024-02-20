import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() value: string = '';
  @Input() isFlipped: boolean = false;
  @Input() isMatched: boolean = false;
  @Output() cardClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  flipCard() {
    if (!this.isFlipped && !this.isMatched) {
      this.cardClicked.emit();
    }
  }

}
