import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

import * as glyphs from './svg';

const glyphsNames = Object.keys(glyphs);

const Template = ({ icon, size }) => (
  <Icon
    icon={icon}
    size={size}
  />
);

export const Default = Template.bind({});

Default.args = {
  icon: glyphsNames[0],
  size: 'small',
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
      constrol: {
        type: 'select',
        options: ['small', 'medium'],
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
