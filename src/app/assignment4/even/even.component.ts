import { Component } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html'
})
export class EvenComponent {

  numbers: number[] = [];

  constructor() { }

  onNewNumberRecieved(n: number) {
    if (n % 2 === 0) {
       this.numbers.push(n);
    }
  }
}
