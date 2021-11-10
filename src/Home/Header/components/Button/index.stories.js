// lib
import React from 'react';

// component
import { Button } from './index';

export default {
  title: 'Header/Components/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'button',
};
