export interface CounterState {
  counter: number;
  channelName: string;
}

export const inititalState: CounterState = {
  counter: 0,
  channelName: 'Helio Dev',
};
