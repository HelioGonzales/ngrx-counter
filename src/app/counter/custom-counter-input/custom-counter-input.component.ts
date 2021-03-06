import { AppState } from './../../store/app.state';
import { Observable } from 'rxjs';
import { getChannelName } from './../state/counter.selectors';
import { customIncrement, changeChannelName } from './../state/counter.actions';
import { CounterState } from './../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  // channelName!: string;
  channelName$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select(getChannelName).subscribe((channelName) => {
    //   console.log('channel name observable called');

    //   this.channelName = channelName;
    // });

    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
