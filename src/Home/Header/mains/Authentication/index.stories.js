// libs
import React from 'react';

// components
import { Authentication } from './index';

export default {
  title: 'Header/mains/Authentication',
  component: Authentication,
};

const Template = args => <Authentication {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  loggedIn: true,
};

export const NotLoggedIn = Template.bind({});
NotLoggedIn.args = {
  loggedIn: false,
};
