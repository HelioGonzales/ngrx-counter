import { getLoading, getErrorMessage } from './store/Shared/shared.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';
  showLoading!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
