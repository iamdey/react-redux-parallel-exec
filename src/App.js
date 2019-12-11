import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createAction } from "@reduxjs/toolkit";
import logo from "./logo.svg";
import "./App.css";

// actions

const activate = createAction("ACTIVATE");
const count = createAction("COUNT");
const reset = createAction("RESET");

const activateEventually = () => (dispatch, getState) => {
  if (!getState().activated) {
    dispatch(activate());
  }
  dispatch(count());
};

// reducers

const initialState = {
  activated: false,
  actCounter: 0,
  counter: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case activate.type:
      return {
        ...state,
        activated: true,
        actCounter: state.actCounter + 1
      };
    case count.type:
      return {
        ...state,
        counter: state.counter + 1
      };
    case reset.type:
      return initialState;
    default:
      return state;
  }
};

const store = configureStore({
  reducer
});

function Activate() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(activateEventually());
  }, []);

  return "activate";
}

function Enable() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  React.useEffect(() => {
    // same algo as `activateEventually` action but in the componentDidMount
    if (!state.activated) {
      dispatch(activate());
    }
    dispatch(count());
  }, []);

  return "enable";
}

function Results() {
  const state = useSelector(state => state);

  return (
    <div>
      <p>Activated (should be yes): {state.activated ? "yes" : "no"}</p>
      <p>actCounter (should be 1): {state.actCounter}</p>
      <p>Counter (should be number of mounts: 3): {state.counter}</p>
    </div>
  );
}

function ResetButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reset());
  };

  return <button onClick={handleClick}>Reset store</button>;
}

function Wrapper({ children }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(count());
  }, []);

  const activated = useSelector(state => state.activated);

  return (
    <>
      <p>{activated ? "Activated" : "Not Activated"} wrapper</p>
      <Enable />
      <Enable />
    </>
  );
}

function Ex1() {
  return (
    <>
      <h3>Use `state.activated` in an action</h3>
      <Activate />
      <Activate />
      <Activate />
    </>
  );
}

function Ex2() {
  return (
    <>
      <h3>Use `state.activated` in the component</h3>
      <Enable />
      <Enable />
      <Enable />
    </>
  );
}

function Ex3() {
  return (
    <>
      <h3>Use `state.activated` in the component and a wrapper</h3>
      <Enable />
      <Wrapper />
    </>
  );
}

function App() {
  const [show, setShow] = React.useState(undefined);
  const handleChange = ev => {
    setShow(Number(ev.target.value));
  };
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <select onChange={handleChange} name="show" value={show}>
              <option value={null}>Select an Ex to display</option>
              <option value={1}>Ex 1</option>
              <option value={2}>Ex 2</option>
              <option value={3}>Ex 3</option>
            </select>{" "}
            <ResetButton />
          </div>
          <div>
            <Results />
            <h2>display Ex {show}</h2>
            {show === 1 && <Ex1 />}
            {show === 2 && <Ex2 />}
            {show === 3 && <Ex3 />}
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
