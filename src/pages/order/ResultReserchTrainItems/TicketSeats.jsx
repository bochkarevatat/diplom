import React from 'react';
import iconRubleSmall from '../../../assets/img/rubleIcon.png';
import './TicketSeats.css'

const numSpc = (value) => {
	let toSpace;
	const strVal = value.toString();
	if (strVal.length > 3) {
		toSpace = strVal.split('').slice(0, strVal.length - 3).join('') + ' ' + strVal.split('').splice(-3, 3).join('');
	} else {
		toSpace = value;
	}
	return toSpace;
}


const TicketSeats = (cityList) => {
  return (
    <div className="train-ticket">
    <p className="ticket-class">{cityList.name}</p>
    <p className="amount-seat">{cityList.seats}</p>
    <p className="ticket-start-text">от</p>
    <h5 className="seat-ticket-start-number">{numSpc(cityList.price)}</h5>
    <img className="sign-rub" src={iconRubleSmall} alt="..."/>
  </div>
  );
};

export default TicketSeats;