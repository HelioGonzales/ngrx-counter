import { authService } from './../../services/aut.service';
import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authSvc: authService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authSvc.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authSvc.formatUser(data);
            return loginSuccess({ user });
          })
        );
      })
    );
  });
}
