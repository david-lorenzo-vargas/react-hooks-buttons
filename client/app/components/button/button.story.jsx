import React from 'react';

import Button from './button';

import * as glyphs from '../icon/svg';

const glyphsNames = Object.keys(glyphs);

const Template = ({
  icon,
  size,
  active,
  onClick,
}) => (
  <Button
    icon={icon}
    size={size}
    active={active}
    onClick={onClick}
  />
);

export const Default = Template.bind({});

Default.args = {
  icon: glyphsNames[0],
  size: 'small',
  active: '',
  onClick: () => { console.log('it works'); },
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
