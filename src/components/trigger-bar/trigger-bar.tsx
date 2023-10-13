import React, { FC } from 'react';
import styles from './trigger-bar.module.css';

type TTrigerBar = {
  children?: React.ReactNode[] | React.ReactNode;
};

const TriggerBar: FC<TTrigerBar> = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.container}>
      {children}
    </div>
  );
};

export default TriggerBar;
