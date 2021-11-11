// libs
import React from 'react';

// components
import NewVersion from './index';

export default {
  title: 'Header/mains/NewVersion',
  component: NewVersion,
  argsTypes: {
    url: { control: 'string' },
  },
};

export const Default = args => <NewVersion {...args} />;
Default.args = {
  url: '#',
};
