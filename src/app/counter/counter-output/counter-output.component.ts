import { AppState } from './../../store/app.state';
import { getCounter } from './../state/counter.selectors';
import { CounterState } from './../state/counter.state';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // OnDestroy implementation was removed because the refactor, it was replace by the observable counter$

  // @Input() counter: any;

  // counter!: number;
  counter$!: Observable<number>;
  // counterSubscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.counterSubscription = this.store
    //   .select(getCounter)
    //   .subscribe((counter) => {
    //     console.log('counter observable called');

    //     this.counter = counter;
    //   });

    this.counter$ = this.store.select(getCounter);
  }

  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
