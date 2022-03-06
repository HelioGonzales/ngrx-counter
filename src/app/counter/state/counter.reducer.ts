import {
  changeChannelName,
  customIncrement,
  decrement,
  increment,
  reset,
} from './counter.actions';
import { inititalState } from './counter.state';
import { createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  inititalState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log(action);

    return {
      ...state,
      counter: action.value + state.counter,
    };
  }),
  on(changeChannelName, (state) => {
    return {
      ...state,
      channelName: 'Modified Helio Dev',
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
