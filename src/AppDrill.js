import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activate, mount } from './store';
import Results from './Results';
import './App.css';

function Bar() {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.activated);
  React.useEffect(() => {
    dispatch(mount());
  }, []);

  const time = new Date().getTime();

  return (
    <div className="Bar">
      <h2>Bar</h2>
      {loaded ? `loaded at ${time}` : ' loading…'}
    </div>
  );
}

function Foo() {
  const time = new Date().getTime();

  return (
    <div className="Foo">
      <h2>Foo</h2>
      <p>rendered at {time}</p>
      <Bar />
    </div>
  );
}

function App(props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(activate());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>App Base</h1>
      </header>
      <div className="App-layout">
        <div className="container">
          <Foo />
        </div>
        <div className="container">
          <Bar />
        </div>
        <div className="container">
          <Bar />
        </div>
      </div>
      <Results />
    </div>
  );
}

export default App;
