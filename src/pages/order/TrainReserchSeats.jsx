import React from 'react';


const TrainReserchSeats = ()=>{

    const [hidden, setHidden] = React.useState('none');

    function showSeats() {
        if (hidden === 'none') {
          setHidden('seat-up-down');
          timer.current = setTimeout(() => setHidden('none'), 3 * 1000);
        } else {
          setHidden('none');
        };
      };

    return(
<div className='train-ticket'>
      <p className='ticket-class'>{name}</p>
      <span className='amount-seat' onMouseEnter={showSeats}>{seats}
        <div className={hidden}>
          {seatInfo.map((el, i) =>
            <div className='seat-up' key={i}>
              <p className='ticket-class'>{el.name}</p>
              <p className='seat-ticket-start-number'>{el.price}</p>
              <span className='sign-rub'></span>
            </div>
          )}
        </div>
      </span>
      <div className='ticket-start-price'>
        <p className='ticket-start-text'>от</p>
        <p className='ticket-start-number'>{price}</p>
        <span className='sign-rub'></span>
      </div>
    </div>


    )
}

export default TrainReserchSeats;