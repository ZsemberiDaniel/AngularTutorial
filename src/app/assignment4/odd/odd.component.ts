import { Component } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: [`
    .prime {
      color: purple;
      font-weight: bolder;
    }
  `]
})
export class OddComponent {

  numbers: number[] = [];

  constructor() { }

  onNewNumberRecieved(n: number) {
    if (n % 2 === 1) this.numbers.push(n);
  }

  isPrime(n: number): boolean {
    if (n <= 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }

    return true;
  }

}
