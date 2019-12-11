# parralel Exec in react redux world

An experimentation of what's happening when 3 components or more ask to `activate` if necessary.

- install

```
yarn
yarn start
```

- usage

Select the Ex to experiment:

1. `!state.activated` is the condition in a redux thunk action to call the `activate` action
2. `!state.activated` is the condition in the «componentDidmount» to call the `activate` action
3. same as `2` but with a `Wrapper` for only 2 `Enable` component
