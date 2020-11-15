import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Once you replace negative thoughts with positive ones, you will start having positive results.',
      'Willie Nelson',
      'goodreads.com',
      new Date(2020, 11, 14),
      0,
      0
    ),
    new Quote(
      2,
      'At this moment, I hope you choose heaven over hell, peace over turbulence, and love over hate.',
      'Kierra C.T. Banks',
      'Nkaka Yves',
      new Date(2015, 5, 28),
      0,
      0
    ),
  ];

  newQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.createdDate = new Date(quote.createdDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure You want to delete this quote owned by: "${this.quotes[index].author}"?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  formShow: boolean;
  formToggle() {
    this.formShow = !this.formShow;
  }

  sortQuotes() {
    this.quotes.sort((a, b) => (b.like > a.like ? 1 : -1));
  }
  highVote(index) {
    this.quotes[index].like + 1;
    this.sortQuotes();
  }
  constructor() { }

  ngOnInit(): void {
    this.sortQuotes();
  }

}
