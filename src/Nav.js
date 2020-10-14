import * as React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from './store';
import AppBase from './AppBase';
import AppOptimEffect from './AppOptimEffect';
import AppOptimThunk from './AppOptimThunk';
import './Nav.css';

function Routes({ app }) {
  switch (app) {
    case 'thunk':
      return <AppOptimThunk />;
    case 'effect':
      return <AppOptimEffect />;
    case 'base':
    default:
      return <AppBase />;
  }
}

function Nav(props) {
  const dispatch = useDispatch();
  const [app, setApp] = React.useState('base');
  const [clearState, setClearState] = React.useState(true);
  const handleClick = (app) => {
    clearState && dispatch(reset());
    setApp(app);
  };
  const handleChange = (ev) => {
    setClearState(ev.target.checked);
  };

  return (
    <>
      <ul className="NavList">
        <li>
          <button
            type="button"
            onClick={() => handleClick('base')}
            disabled={app === 'base'}
          >
            Base
          </button>{' '}
          <button
            type="button"
            onClick={() => handleClick('effect')}
            disabled={app === 'effect'}
          >
            Optim effect
          </button>{' '}
          <button
            type="button"
            onClick={() => handleClick('thunk')}
            disabled={app === 'thunk'}
          >
            Optim thunk
          </button>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              onChange={handleChange}
              checked={clearState}
            />{' '}
            Clear State
          </label>
        </li>
      </ul>
      <Routes app={app} />
    </>
  );
}

export default Nav;
