import * as React from 'react';
import { useSelector } from 'react-redux';

function Results() {
  const state = useSelector((state) => state);

  return (
    <div>
      <h2>Results</h2>
      <p>Activated (should be yes): {state.activated ? 'yes' : 'no'}</p>
      <p>actCounter (should be 1): {state.actCounter}</p>
      <p>Counter (should be number of mounts: 3): {state.mountCounter}</p>
    </div>
  );
}

export default Results;
