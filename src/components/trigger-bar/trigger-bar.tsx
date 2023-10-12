import React, { FC } from 'react';
import styles from './trigger-bar.module.css';

type TTrigerBar = {
  children?: React.ReactNode[];
};

const TriggerBar: FC<TTrigerBar> = ({
  children = [<div>+default</div>, <div>default-</div>],
  ...props
}) => {
  const [trig, ...rest] = [...children];
  return (
    <div {...props} className={styles.container}>
      {trig}

      {rest}
    </div>
  );
};

export default TriggerBar;
