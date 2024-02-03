import React from 'react';
// import { useEffect, useState} from 'react';
// import rubleIcon from '../order/img/rubleIcon.png';
// import groupIcons from '../order/img/group-icons.png';
import './CardLastTicket.css'

// import { departure} from './departure';
function test() {
	// const [rates, setRates] = React.useState({});

	React.useEffect(() => {
		fetch("https://students.netoservices.ru/fe-diplom/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa8f83e028786ea567b")
		.then( response => response.json()
        .then( data => { console.log( 'routes',  data ) })
		)
	  }, []);
}


const CardLastTicket = () => {
	
	// const { items } = useAppSelector(sliceGetLastRoutesState);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(getLastRoutesThunk());
//   }, [dispatch]);

  return (
    <section className='last-routes'>
		<h4 className='last-title'>последние билеты</h4>
	
		 <ul className='last-list'>
			<li className='last-list-item'></li>
		 </ul>
      {/* <h4 className='last-title'>последние билеты</h4>
      <ul className='last-list'>
        {items.map((el) =>
          <li className='last-list-item' key={el.departure._id}>
            <div className='route-from-to'>
              <div className='route-from'> */}
                {/* <h5 className='route-city-text'>{el.departure.from.city.name}</h5>
                <p className='route-station-text'>{el.departure.from.railway_station_name}</p> */}
                {/* <p className='route-station-text'>вокзал</p>
              </div>
              <div className='route-to'> */}
                {/* <h5 className='route-city-text'>{el.departure.to.city.name}</h5> */}
                {/* <p className='route-station-text'>{el.departure.to.railway_station_name}</p> */}
                {/* <p className='route-station-text'>вокзал</p>
              </div>
            </div>
            <div className='route-facilities-price'>
              <div className='route-facilities'></div>
              <div className='route-start-price'>
                <p className='price-start-text'>от</p>
                {/* <p className='price-start-number'>{el.min_price}</p> */}
                {/* <span className='sign-rub'></span>
              </div>
            </div>
          </li>
        )}
      </ul> */} 
    </section>
	);
};

export default CardLastTicket;