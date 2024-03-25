import React from 'react';

import './TrainPopoverItem.css';
import iconRubleSmall from '../../../assets/img/rubleIcon.png';

const TrainPopoverItem = ({ type, quantity, priceDep }) => {
  let card;

  const makeItem = (name, price) => (
    <div className="popover-inf">
      <span className="popover-name">{name}</span>

      <div className="popover-right">
        <div className="popover-part-right">
        <span className="popover-right-quantity">{quantity}</span>
          <span className="popover-right-price">{price}</span>
          <img className="iconRubleSmall" src={iconRubleSmall} alt="иконка - рубль" />
        </div>
      </div>
    </div>
  );

  if (type === 'Сидячий' || type === 'Купе' || type === 'Люкс'|| type === 'Плацкарт') {
    if (priceDep) {
      card = (
        <>
          {priceDep.top_price && makeItem('верхние', priceDep.top_price)}
          {priceDep.bottom_price &&
            makeItem('нижние', priceDep.bottom_price)}
          {priceDep.side_price && makeItem('боковые', priceDep.side_price)}
        </>
      );
    }
  }

  return card;
}
export default TrainPopoverItem;