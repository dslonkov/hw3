import React from 'react';

const Listing = ({ items }) => {


  return (
    <div className="item-list">
      {
        items.map((item) => {

          const getClass = () => {
            if (item.quantity <= 10) return 'item-quantity level-low';
            if (item.quantity > 10 && item.quantity < 20) return 'item-quantity level-medium';
            if (item.quantity >= 20) return 'item-quantity level-high';
          }

          const getCode = () => {
            if (item.currency_code == 'EUR' || item.currency_code == 'USD') {
              return item.currency_code + ' ' + item.price;
            } else {
              return item.price + ' ' + item.currency_code
            }
          }


          if (!item.title) {
            item.title = '';
          }

          if(!item.currency_code) {
            item.currency_code = '';
          }

          if(!item.price) {
            item.price = '';
          }

          return (
            <div
              className="item"
              key={item.listing_id}
            >
              <div className="item-image">
                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                  <img src={item.MainImage && item.MainImage.url_570xN} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{item.title.length <= 50 ? item.title : item.title.slice(0, 50) + '...'}</p>
                <p className="item-price">{getCode()}</p>
                <p className={getClass()}>{item.quantity}</p>
              </div>
            </div>
          )
          }

        )
      }
    </div>
  );
};

export default Listing;
