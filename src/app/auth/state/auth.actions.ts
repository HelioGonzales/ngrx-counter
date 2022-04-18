import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOGIN_START = '[Auth page] login start';
export const LOGIN_SUCCESS = '[Auth page] login success';
export const LOGIN_FAIL = '[Auth page] login fail';

export const SIGNUP_START = '[Auth page] sign up start';
export const SIGNUP_SUCCESS = '[Auth page] sign up success';

export const AUTO_LOGIN_ACTION = '[Auth page] auto login';

export const LOGOUT_ACTION = '[Auth page] logout';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: any; redirect: boolean }>()
);

export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);
export const autoLogout = createAction(LOGOUT_ACTION);
