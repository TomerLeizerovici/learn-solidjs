import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [counter, setCounter] = createSignal<number>(0);

  const addToCounter = (numberToAdd: number) => setCounter(counter() + numberToAdd)
  return (
    <div class={styles.App}>
      <h1>My app</h1>
      <p>{counter()}</p>
      <button onClick={() => addToCounter(1)}>Add to counter</button>
      <button onClick={() => addToCounter(-1)}>Remove from counter</button>
    </div>
  );
};

export default App;
