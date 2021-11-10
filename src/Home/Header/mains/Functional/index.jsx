// libs
import React from 'react';
// import PropTypes from 'prop-types';

// styles
import './style.scss';

// components
import { Icon } from '../../components/Icon';

// other
import icUpload from '../../../../assets/ic_upload.png';
import icStore from '../../../../assets/ic_store.png';

const Functional = () => {
  const listIcon = [
    {
      image: { src: icUpload, alt: 'upload icon' },
    },
    {
      image: { src: icStore, alt: 'upload icon' },
    },
  ];

  return (
    <div className="functional">
      {listIcon.map(icon => (
        <Icon image={icon.image} />
      ))}
    </div>
  );
};

export default Functional;
