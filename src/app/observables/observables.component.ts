
import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  private myObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('fist package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('doesnt look right');
      }, 5000);
    });

    myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => {}
    );
  }

  ngOnDestroy() {
    this.myObsSubscription.unsubscribe();
  }

}
