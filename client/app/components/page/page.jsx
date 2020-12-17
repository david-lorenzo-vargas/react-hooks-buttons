import React, { useState } from 'react';
import styles from './page.scss';
import Button from '../button';

const Page = () => {
  const [state, setState] = useState({ active: false });

  const handleButtonClick = () => {
    setState({
      active: !state.active,
    });
  };

  return (
    <div className={styles.page}>
      <Button
        onClick={handleButtonClick}
        icon="add"
        size="medium"
        active={state.active}
      />
    </div>
  );
};

export default Page;
