import React from 'react';

import SHOP_DATA from '../assets/shop.data';

import CollectionPreview from '../components/CollectionPreview.component'
import {Header} from '../components/Header.component'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <Header stylesForHeader={{ color: 'blue'}}/>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;