import React from 'react';
import classnames from 'classnames/bind';
import { Row, Column } from '../grid';
import Button from '../button';
import styles from './pop-buttons.scss';

const cx = classnames.bind(styles);

const PopButtons = (props) => {
  const { active } = props;

  return (
    <div className={cx('pop-buttons', {
      'pop-buttons--active': active,
    })}
    >
      <Column>
        <Row center>
          <Button size="small" icon="card" />
        </Row>
        <Row between>
          <Button size="small" icon="profile" />
          <Button size="small" icon="chart" />
        </Row>
      </Column>
    </div>
  );
};

export default PopButtons;
