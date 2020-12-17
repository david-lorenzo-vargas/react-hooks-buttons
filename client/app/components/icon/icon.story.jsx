import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

import * as glyphs from './svg';

const glyphsNames = Object.keys(glyphs);

const Template = ({ icon, size, active }) => (
  <Icon
    icon={icon}
    size={size}
    active={active}
  />
);

export const Default = Template.bind({});

Default.args = {
  icon: glyphsNames[0],
  size: 'small',
  active: '',
};

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'string' },
      control: {
        type: 'select',
        options: glyphsNames,
      },
    },
    size: {
      name: 'size',
      type: { name: 'string' },
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    active: {
      name: 'active',
      type: { name: 'string' },
      control: {
        type: 'select',
        options: ['active', ''],
      },
    },
  },
};

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  icon: '',
  size: '',
};
