import React from 'react';
import './ResultReserchTrain.css'


function conversionDate(time) {
    if (time) {
      return new Date(time * 1000).toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    return '';
  };


const ResultReserchTrain = () =>{

    const [itemsResultReserchTrain, setResultReserchTrain] = React.useState([]);
    


  React.useEffect(() =>{
    fetch("https://students.netoservices.ru/fe-diplom/routes/last").then((res) => {return res.json()}).
    then(arr => {
      setResultReserchTrain(arr)
    })
  }, [])
  
    return (
        <div className='train-route'>
        
          {itemsResultReserchTrain.map((el) =>
           <div className='train-name-items'>
          <div className='train-name'>
          <span className='train-name-image'></span>
          
          {console.log(el)}
         
          <h5 className='train-name-text'>{el.departure.duration}</h5>
          <div className='train-name-direction'>
            <p className='train-name-city'>&#8594;{el.departure.from.city.name}</p>
            <p className='train-name-city'>&#8594;{el.departure.to.city.name}</p>
            <p className='train-name-city'>&#171;{el.departure.train.name}&#187;</p>
          </div>
          
         
          </div>
          
          
       <div className='train-direction'>
          <div className='train-direction-route'>
            <div className='train-direction-from'>
              <div className='direction-time'>{conversionDate(el.departure.from.datetime)}</div>
              <div className='direction-from'>
                <h5 className='direction-city'>{el.departure.from.city.name}</h5>
                <p className='direction-station'>{el.departure.from.railway_station_name}</p>
                <p className='direction-station'>вокзал</p>
              </div>
            </div>
            <div className='train-direction-time'>
              <p className='travel-time'>{conversionDate(el.departure.duration)}</p>
              <span className='direction-arrow'></span>
            </div>
            <div className='train-direction-to'>
              <div className='direction-time'>{conversionDate(el.departure.to.datetime)}</div>
              <div className='direction-to'>
                <h5 className='direction-city'>{el.departure.to.city.name}</h5>
                <p className='direction-station'>{el.departure.to.railway_station_name}</p>
                <p className='direction-station'>вокзал</p>
              </div>
            </div>
          </div>
        </div>  
        </div>
        )}
        {/* <div className='train-tickets'>
          <div className='train-tickets-options'>
            {train.map((el) =>
              <TrainRouteSeats
                name={el.name}
                seats={el.seats}
                price={el.price}
                seatPrice={el.seatPrice}
                key={el.name} />
            )}
  
          </div>
  
          <div className='train-facilities'>
            <span className={`${route.departure.have_wifi ? 'facilities-wifi-have' : 'train-facilities-wifi'}`}></span>
            <span className={`${route.departure.is_express ? 'facilities-express-have' : 'train-facilities-express'}`}></span>
            <span className={`${route.departure.have_air_conditioning ? 'facilities-coffee-have' : 'train-facilities-coffee'}`}></span>
          </div>
  
          {btnText !== 'Изменить' ?
            <button type='button' className='train-choice-btn' onClick={getCoaches}>{btnText}</button> :
            <button type='button' className='order-route-btn' onClick={backOrder}>{btnText}</button>}
        </div> */}
      </div>


    )
}

export default ResultReserchTrain;