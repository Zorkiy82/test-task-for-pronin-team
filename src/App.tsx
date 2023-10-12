import React from 'react';
import TriggerBar from './components/trigger-bar/trigger-bar';
import styles from './App.module.css';

function App() {
  return (
    <main>
      <div className={styles.main_container}>
        <TriggerBar>
          <p>first</p>
          <p>second</p>
          <p>333333</p>
        </TriggerBar>
        <TriggerBar>
          <p>first</p>
          <p>second</p>
          <p>333333</p>
        </TriggerBar>
      </div>
    </main>
  );
}

export default App;
