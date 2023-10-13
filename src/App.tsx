import React from 'react';
import TriggerBar from './components/trigger-bar/trigger-bar';
import styles from './App.module.css';
import DropdownMenu from './components/dropdown-menu/dropdown-menu';

function App() {
  return (
    <main>
      <div className={styles.main_container}>
        <TriggerBar>
          <DropdownMenu>
            <div>trigger</div>
            <div onClick={() => console.log('1) menu item')}>
              1) menu item+++++++++++++++++++++++++++++++++++++++
            </div>
            <div onClick={() => console.log('2) menu item')}>2) menu item</div>
            <div onClick={() => console.log('3) menu item')}>3) menu item</div>
            <div onClick={() => console.log('4) menu item')}>4) menu item</div>
          </DropdownMenu>
          <DropdownMenu>
            <p>first</p>
            <p>second</p>
            <p>333333</p>
          </DropdownMenu>
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
