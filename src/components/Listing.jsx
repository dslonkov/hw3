import React from 'react';

const Listing = ({ items }) => {

  console.log(items)

  return (
    <div className="item-list">
      {
        items.map((item) => {

          console.log(item)

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
                {/*<p className="item-title">{item.title.length <= 50 ? item.title : item.title.slice(0, 50)}</p>*/}
                <p className="item-price">
                  {
                    item.currency_code = 'USD' || 'EUR' ?
                    item.currency_code + item.price :
                    item.price + ' ' + item.currency_code
                }
                </p>
                <p className={item.quantity <= 10 ? 'item-quantity level-low' : 'item-quantity level-medium'}>{item.quantity}</p>
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
