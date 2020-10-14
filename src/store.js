import { createAction } from '@reduxjs/toolkit';

// actions

// We want Bar to dispatch the `active` action in an efficient way
export const activate = createAction('ACTIVATE');
// Bar will dispatch the `mount` action
export const mount = createAction('MOUNT');
export const reset = createAction('RESET');

// reducers

const initialState = {
  // false until Bar has finished to dispatch its action
  activated: false,
  // how many times the `activate` action has been dispatched
  actCounter: 0,
  // keep track of mounted Bar
  mountCounter: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case activate.type:
      return {
        ...state,
        activated: true,
        actCounter: state.actCounter + 1,
      };
    case mount.type:
      return {
        ...state,
        mountCounter: state.mountCounter + 1,
      };
    case reset.type:
      return { ...initialState };
    default:
      return state;
  }
};
