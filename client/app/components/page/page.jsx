import React, { useState } from 'react';
import styles from './page.scss';
import Button from '../button';
import PopButtons from '../pop-buttons';

const Page = () => {
  const [state, setState] = useState({ active: false });

  const handleButtonClick = () => {
    setState({
      active: !state.active,
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles['page__pop-buttons']}>
        {state.active ?
          <PopButtons active={state.active} />
          : null}
      </div>
      <div className={styles['page__add-button']}>
        <Button
          onClick={handleButtonClick}
          icon="add"
          size="medium"
          active={state.active}
        />
      </div>
    </div>
  );
};

export default Page;
