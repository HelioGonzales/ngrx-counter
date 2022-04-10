import { AuthState } from './../auth/state/auth.state';
import { AUTH_STATE_NAME } from './../auth/state/auth.selector';
import { SharedState } from './Shared/shared.state';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { Sharedreducer } from './Shared/shared.reducer';
import { AuthReducer } from '../auth/state/auth.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: Sharedreducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
