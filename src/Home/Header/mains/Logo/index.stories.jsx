// libs
import React from 'react';

// components
import Logo from './index';

export default {
  title: 'Header/mains/Logo',
  component: Logo,
  argsType: {
    url: { control: 'string' },
  },
};

export const Default = args => <Logo {...args} />;
Default.args = {
  url: '#',
};
