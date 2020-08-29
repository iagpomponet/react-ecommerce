import React from 'react';

import './custom-button.styles.scss';

const customButton = ({ children, ...otherProps}) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  )
}

export default customButton;