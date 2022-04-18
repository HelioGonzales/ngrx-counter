import {
  setErrorMessage,
  setLoadingSpinner,
} from './../../store/Shared/shared.action';
import { AppState } from 'src/app/store/app.state';
import { authService } from './../../services/aut.service';
import {
  autoLogin,
  autoLogout,
  loginStart,
  loginSuccess,
  signupStart,
  signupSuccess,
} from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authSvc: authService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      mergeMap((action) => {
        return this.authSvc.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authSvc.formatUser(data);
            this.authSvc.setUserInLocalStorage(user);
            return loginSuccess({ user, redirect: true });
          }),
          catchError((errRes) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authSvc.getErrorMessage(
              errRes.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess, signupSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));

          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  // signUpRedirect$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(signupSuccess),
  //       tap((action) => {
  //         this.store.dispatch(setErrorMessage({ message: '' }));
  //         this.router.navigate(['/']);
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authSvc.signUp(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this.authSvc.formatUser(data);
            this.authSvc.setUserInLocalStorage(user);
            return signupSuccess({ user, redirect: true });
          }),
          catchError((errRes) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authSvc.getErrorMessage(
              errRes.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authSvc.getUserFromLocalStorage();

        return of(loginSuccess({ user, redirect: false }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(autoLogout),
        map((action) => {
          this.authSvc.logout();
          this.router.navigate(['auth']);
        })
      );
    },
    { dispatch: false }
  );
}
