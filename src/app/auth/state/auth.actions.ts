import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOGIN_START = '[Auth page] login start';
export const LOGIN_SUCCESS = '[Auth page] login success';
export const LOGIN_FAIL = '[Auth page] login fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);
