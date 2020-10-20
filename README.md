# parralel Exec in react redux world

An experimentation of what's happening when 3 components or more ask to
`activate` if necessary.

The goal is to determine an optimized way to dispatch the `activate` action from
a component.

_The related [slides][1] of the lighting talk._

## install

```
yarn
yarn start
```

## usage

3 views are available corresponding to 3 version of «apps»:

- Base: `AppBase.js` basic code, not optimized, call `activate` on each mount of
  `Bar`.
- Optim on useEffect: `AppOptimEffect`, call `activate` on mount of `Bar` only
  if not yet `activated`.
- Optim on thunk action: `AppOptimThunk`, call `activate` on mount of `Bar` only
  if not yet `activated` from `getState` in the thunk action.

[1]:
  https://docs.google.com/presentation/d/1Roxy41-GaHWW0twpVSqXDI8vQIThQI_d0JucgB0wfLc/edit?usp=sharing
