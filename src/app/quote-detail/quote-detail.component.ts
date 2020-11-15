import { Quote } from '../quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quotes: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() check = new EventEmitter<number>();

  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }

  downvotebtn() {
    this.quotes.dislike = this.quotes.dislike + 1;
  }

  upvotebtn() {
    this.quotes.like= this.quotes.like + 1;
    this.check.emit(this.quotes.like);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
