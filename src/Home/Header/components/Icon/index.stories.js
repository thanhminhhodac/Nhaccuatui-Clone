// libs
import React from 'react';

// Components
import { Icon } from './index';

// icons
import Upload from '../../../../assets/ic_upload.png';
import Store from '../../../../assets/ic_store.png';

export default {
  title: 'Header/Components/Icon',
  component: Icon,
};

const Template = args => <Icon {...args} />;

export const UploadIcon = Template.bind({});
UploadIcon.args = {
  image: {
    src: Upload,
    alt: 'Upload icon',
  },
};

export const StoreIcon = Template.bind({});
StoreIcon.args = {
  image: {
    src: Store,
    alt: 'Store icon',
  },
};
