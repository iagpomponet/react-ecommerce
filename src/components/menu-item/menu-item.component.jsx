import React from 'react';

import './menu-item.styles.scss'

const menuItem = ({title, imageUrl}) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}className='menu-item'>
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default menuItem;

