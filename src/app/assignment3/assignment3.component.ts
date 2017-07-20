import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {

  displayDetails = false;
  buttonClickLog = [];

  onButtonPressed() {
    this.displayDetails = !this.displayDetails;

    this.buttonClickLog.push({
      date: new Date(),
      toggleType: this.displayDetails
    });
  }
}
