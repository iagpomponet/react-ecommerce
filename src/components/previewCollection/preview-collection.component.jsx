import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const collectionPreview = ({title, items}) => {
  return <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => {
          return <CollectionItem key={id} {...otherItemProps} />
        })
      }
    </div>
  </div>
}

export default collectionPreview;