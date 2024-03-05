import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import {filterTrain} from '../../../redux/slices/FilterTrainSlice'
import '../ResultReserchTrain.css';


function conversionDate(time) {
    if (time) {
      return new Date(time * 1000).toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    return '';
  };


const CartsTest = ({cityList,searchText}) => {


    

return (

    <div className="">
            {cityList.map((el) => {
                return (
                    <div className='train-name-items'>
          <div className='train-name'>
          <span className='train-name-image'></span>
          
         
         
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
                )
            })}
        </div>
    
)

}

export default CartsTest