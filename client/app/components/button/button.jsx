import React from 'react';
import classnames from 'classnames/bind';
import Icon from '../icon';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = (props) => {
  const {
    icon,
    size,
    onClick,
    active,
  } = props;

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleButtonClick}
      className={cx('button', {
        [`button--size-${size}`]: size,
        'button--active': active,
      })}
    >
      <div className={cx('button__item')} />
      <Icon icon={icon} size={size} active={active} />
    </div>
  );
};

export default Button;
