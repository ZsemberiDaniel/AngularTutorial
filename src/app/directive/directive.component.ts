import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  numbers: number[] = [1, 2, 3, 4, 5];
  showOdds = false;

  constructor() { }

}
