import { FC, useState } from 'react';
import styles from './dropdown-menu.module.css';

type TDropdownMenu = {
  children: React.ReactNode[];
};

const DropdownMenu: FC<TDropdownMenu> = ({ children = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(true);
  const toogleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div onClick={toogleIsOpen} className={styles.triggerContainer}>
          {children[0]}
        </div>
        {isOpen && isVisible && (
          <div className={styles.dropdownMenuContainer}>
            {children
              .filter((_, index) => index > 0)
              .map((item, index) => {
                return (
                  <div
                    onClick={toogleIsOpen}
                    className={styles.menuItem}
                    key={`alfa${index * 1}`}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        )}
      </div>
      {isOpen && (
        <div onClick={toogleIsOpen} className={styles.dropdownOverlay} />
      )}
    </>
  );
};

export default DropdownMenu;
