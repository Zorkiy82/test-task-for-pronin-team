import { FC, useEffect, useRef, useState } from 'react';
import styles from './dropdown-menu.module.css';

type TDropdownMenu = {
  children: React.ReactNode[];
};

const menuStylesMap: { [key: string]: string | undefined } = {
  left: styles.aligne_left,
  right: styles.aligne_right,
  left_up: styles.aligne_left_up,
  right_up: styles.aligne_right_up,
};

const DropdownMenu: FC<TDropdownMenu> = ({ children = [] }) => {
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuStyles, setMenuStyles] = useState(menuStylesMap.left);

  const checkAndSetMenuStyles = () => {
    if (dropdownRef.current !== null) {
      const dropdown = dropdownRef.current as Element;
      const { innerWidth, innerHeight } = window;
      const { left, right, top, bottom } = dropdown.getBoundingClientRect();
      const horisontal = right >= innerWidth - left ? 'right' : 'left';
      const vertical = top >= innerHeight - bottom ? '_up' : '';
      const res = horisontal + vertical;
      setMenuStyles(menuStylesMap[res]);
    }
  };

  const toogleIsOpen = () => {
    checkAndSetMenuStyles();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const triggerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0,
    };
    const triggerCallback = (entries: IntersectionObserverEntry[]) => {
      setIsVisible(entries[0].isIntersecting);
    };
    const triggerObserver = new IntersectionObserver(
      triggerCallback,
      triggerOptions
    );

    if (triggerRef.current !== null) {
      const trigger = triggerRef.current as Element;
      triggerObserver.observe(trigger);
    }

    const dropdownOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const dropdownCallback = () => {
      checkAndSetMenuStyles();
    };
    const dropdownObserver = new IntersectionObserver(
      dropdownCallback,
      dropdownOptions
    );

    if (dropdownRef.current !== null) {
      const dropdown = dropdownRef.current as Element;
      dropdownObserver.observe(dropdown);
    }

    return () => {
      triggerObserver.disconnect();
      dropdownObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className={styles.commonContainer}>
        <div
          onClick={toogleIsOpen}
          className={styles.triggerContainer}
          ref={triggerRef}
        >
          {children[0]}
        </div>

        <div
          ref={dropdownRef}
          className={`${styles.dropdownMenuContainer} ${menuStyles}`}
        >
          {isOpen && isVisible && (
            <div className={`${styles.dropdownMenu}`}>
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
      </div>

      {isOpen && (
        <div onClick={toogleIsOpen} className={styles.dropdownOverlay} />
      )}
    </>
  );
};

export default DropdownMenu;
