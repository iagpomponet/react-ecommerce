import React from 'react';

import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const menuItem = ({title, imageUrl, history, match, linkUrl}) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}className='menu-item' onClick={() => { history.push(`${match.url}${linkUrl}`)}}>
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(menuItem);

