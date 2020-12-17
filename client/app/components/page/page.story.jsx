import React from 'react';

import Page from './page';

const Template = ({ icon, size, active }) => (
  <Page
    icon={icon}
    size={size}
    active={active}
  />
);

export const Default = Template.bind({});

Default.args = {
  icon: 'add',
  size: 'small',
  active: '',
};

export default {
  title: 'UI/Page',
  component: Page,
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'string' },
      control: {
        type: 'select',
        options: ['add', ''],
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
