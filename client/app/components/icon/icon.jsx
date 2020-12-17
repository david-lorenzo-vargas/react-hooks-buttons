import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import * as glyphs from './svg';

import styles from './icon.scss';

const cx = classnames.bind(styles);

const Icon = (props) => {
  const {
    icon,
    size,
    active,
    previousActive,
  } = props;

  return (
    <div className={cx('icon', {
      [`icon--size-${size}`]: size,
      'icon--active': active,
      'icon--back': previousActive,
    })}
    >
      <i dangerouslySetInnerHTML={{ __html: glyphs[icon] }} />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  icon: '',
  size: '',
};

export default Icon;
