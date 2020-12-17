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
    previousActive,
  } = props;

  const handleButtonClick = () => {
    onClick();
  };

  const popingButtons = icon === 'profile' || icon === 'card' || icon === 'chart';

  return (
    <div
      onClick={handleButtonClick}
      className={cx('button', {
        [`button--size-${size}`]: size,
        'button--active': active,
        'button--pop': popingButtons,
      })}
    >
      <div className={cx('button__item')} />
      <Icon
        icon={icon}
        size={size}
        active={active}
        previousActive={previousActive}
      />
    </div>
  );
};

export default Button;
