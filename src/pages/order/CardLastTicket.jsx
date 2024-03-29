import React from 'react';

import './CardLastTicket.css'



// const lastRout =[]

const CardLastTicket = () => {



  const [itemslastRout, setitemslastRout] = React.useState([]);

  React.useEffect(() =>{
    fetch("https://students.netoservices.ru/fe-diplom/routes/last").then((res) => {return res.json()}).
    then(arr => {
      setitemslastRout(arr.slice(0,3))
    })
  }, [])
    
// let index = 3;

  return (
    <section className='last-routes'>
		
      <h4 className='last-title'>последние билеты</h4>
      <ul className='last-list'>
      {itemslastRout.map( (el) => (
              <li className='last-list-item' key={el.departure._id}>
            <div className='route-from-to'>
              <div className='route-from'> 
                 <h5 className='route-city-text'>{el.departure.from.city.name}</h5>
                <p className='route-station-text'>{el.departure.from.railway_station_name}</p> 
                <p className='route-station-text'>вокзал</p>
              </div>
              <div className='route-to'>
               <h5 className='route-city-text'>{el.departure.to.city.name}</h5> 
               <p className='route-station-text'>{el.departure.to.railway_station_name}</p> 
                <p className='route-station-text'>вокзал</p>
              </div>
            </div>
            <div className='route-facilities-price'>
              <div className='route-facilities'></div>
              <div className='route-start-price'>
                <p className='price-start-text'>от</p>
                <p className='price-start-number'>{el.min_price}</p> 
                <span className='sign-rub'></span>
              </div>
            </div>
          </li>
            ))}

       
          


        
      </ul>
    </section>
	);
};

export default CardLastTicket;