import React, { FC } from 'react';
import styles from './dropdown-menu-item.module.css';
import CircleIcon from '../../icons/circle.svg';

interface TMenuItem extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
  text?: string;
}

const MenuItem: FC<TMenuItem> = ({
  icon = CircleIcon,
  text = '...',
  ...props
}) => {
  return (
    <div {...props} className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div
        className={styles.icon}
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
    </div>
  );
};

export default MenuItem;
