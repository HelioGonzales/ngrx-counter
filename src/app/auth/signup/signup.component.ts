import { signupStart } from './../state/auth.actions';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from './../../store/Shared/shared.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignUpSubmit() {
    if (!this.signUpForm) {
      return;
    }

    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;

    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(signupStart({ email, password }));
  }
}
