import React from 'react';

import Button from './button';

import * as glyphs from '../icon/svg';

const glyphsNames = Object.keys(glyphs);

const Template = ({ icon, size }) => (
  <Button
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
  title: 'UI/Button',
  component: Button,
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
  },
};
