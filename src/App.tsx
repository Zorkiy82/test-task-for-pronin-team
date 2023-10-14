import React, { useState } from 'react';
import TriggerBar from './components/trigger-bar/trigger-bar';
import styles from './App.module.css';
import DropdownMenu from './components/dropdown-menu/dropdown-menu';
import MinusCircleIcon from './icons/minus-circle.svg';
import PlusCircleIcon from './icons/plus-circle.svg';
import XCircleIcon from './icons/x-circle.svg';
import DivideCircleIcon from './icons/divide-circle.svg';
import MenuItem from './components/dropdown-menu-item/dropdown-menu-item';

function App() {
  const [counter, setCounter] = useState(0);
  const plusHandler = (n: number) => {
    setCounter(counter + n);
  };
  const minusHandler = (n: number) => {
    setCounter(counter - n);
  };
  const xHandler = (n: number) => {
    setCounter(counter * n);
  };
  const divideHandler = (n: number) => {
    setCounter(counter / n);
  };
  return (
    <main>
      <div className={styles.main_container}>
        {/* Верхний ряд триггеров---------------------------------------------------------------- */}
        <TriggerBar>
          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_s}`}
            >
              1
            </button>

            <MenuItem
              onClick={() => xHandler(1)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(1)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(1)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(1)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>

          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_s}`}
            >
              2
            </button>
            <MenuItem
              onClick={() => xHandler(2)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(2)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(2)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(2)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>

          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_s}`}
            >
              3
            </button>
            <MenuItem
              onClick={() => xHandler(3)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(3)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(3)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(3)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>
        </TriggerBar>

        {/* Средний ряд триггеров---------------------------------------------------------------- */}

        <TriggerBar>
          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_l}`}
            >
              4
            </button>

            <MenuItem
              onClick={() => xHandler(4)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(4)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(4)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(4)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>

          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_l}`}
            >
              5
            </button>
            <MenuItem
              onClick={() => xHandler(5)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(5)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(5)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(5)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>

          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_l}`}
            >
              6
            </button>
            <MenuItem
              onClick={() => xHandler(6)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(6)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(6)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(6)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>
        </TriggerBar>

        {/* Нижний ряд триггеров---------------------------------------------------------------- */}

        <TriggerBar>
          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_xl}`}
            >
              7
            </button>

            <MenuItem
              onClick={() => xHandler(7)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(7)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(7)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(7)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>

          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_xl}`}
            >
              8
            </button>

            <MenuItem
              onClick={() => xHandler(8)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(8)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(8)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(8)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>

          <DropdownMenu>
            <button
              type="button"
              className={`${styles.trigger} ${styles.trigger_xl}`}
            >
              9
            </button>

            <MenuItem
              onClick={() => xHandler(9)}
              text="Умножить"
              icon={XCircleIcon}
            />
            <MenuItem
              onClick={() => plusHandler(9)}
              text="Прибавить"
              icon={PlusCircleIcon}
            />
            <MenuItem
              onClick={() => divideHandler(9)}
              text="Делить"
              icon={DivideCircleIcon}
            />
            <MenuItem
              onClick={() => minusHandler(9)}
              text="Вычесть"
              icon={MinusCircleIcon}
            />
          </DropdownMenu>
        </TriggerBar>
      </div>
      <p className={styles.counter}>{counter}</p>
    </main>
  );
}

export default App;
