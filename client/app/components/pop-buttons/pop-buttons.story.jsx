import React from 'react';

import PopButtons from './pop-buttons';

const Template = ({ icon, size, active }) => (
  <PopButtons
    icon={icon}
    size={size}
    active={active}
  />
);

export const Default = Template.bind({});

Default.args = {
  icon: '',
  size: '',
  active: '',
};

export default {
  title: 'UI/PopButtons',
  component: PopButtons,
};
