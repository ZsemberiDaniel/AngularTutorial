import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent {

  @Output() numberEvent = new EventEmitter<number>();

  intervalId;
  numberAt = 0;

  constructor() { }

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.numberEvent.emit(++this.numberAt);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId);
  }

}
