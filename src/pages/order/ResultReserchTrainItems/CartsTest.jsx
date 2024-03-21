import React from 'react';
import { CustomLink } from '../../../components/CustomLink';
// import { useSelector, useDispatch} from 'react-redux';

// import {filterTrain} from '../../../redux/slices/FilterTrainSlice'
import '../ResultReserchTrain.css';
import iconRubleSmall from '../../../assets/img/rubleIcon.png';
import groupIcons from '../../../assets/img/group-icons.png';

import TicketSeats from './TicketSeats'

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

    <div className="train">
            {cityList.map((el) => {
                return (
                    <div className='train-name-items'>
          <div className='train-name'>
          <span className='train-name-image'></span>
          
         
         
          <h5 className='train-name-text'>{el.departure.train.name}</h5>
          <div className='train-name-direction'>
            <p className='train-name-city'>&#8594;{el.departure.from.city.name}</p>
            <p className='train-name-city'>&#8594;{el.departure.to.city.name}</p>
            <p className='train-name-city'>&#171;{el.arrival.train.name}&#187;</p>
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

          <div className='train-direction-route'>
            <div className='train-direction-from'>
              <div className='direction-time'>{conversionDate(el.arrival.from.datetime)}</div>
              <div className='direction-from'>
                <h5 className='direction-city'>{el.arrival.from.city.name}</h5>
                <p className='direction-station'>{el.arrival.from.railway_station_name}</p>
                <p className='direction-station'>вокзал</p>
              </div>
            </div>
            <div className='train-direction-time'>
              <p className='travel-time'>{conversionDate(el.arrival.duration)}</p>
              <span className='direction-arrow-from'></span>
            </div>
            <div className='train-direction-to'>
              <div className='direction-time'>{conversionDate(el.arrival.to.datetime)}</div>
              <div className='direction-to'>
                <h5 className='direction-city'>{el.arrival.to.city.name}</h5>
                <p className='direction-station'>{el.arrival.to.railway_station_name}</p>
                <p className='direction-station'>вокзал</p>
              </div>
            </div>
            
          </div>

        </div>  
        
        <div className='train-seats-all'>
        {el.departure.have_fourth_class &&
                  <TicketSeats name="Сидячий"
									seats={el.available_seats_info.fourth}
									price={el.departure.price_info.fourth.top_price} /> 
        }
        {el.departure.have_third_class &&
                 <TicketSeats name="Плацкарт"
									seats={el.available_seats_info.third}
									price={el.departure.price_info.third.top_price} />
        }
        {el.departure.have_second_class &&
                  <TicketSeats name="Купе"
									seats={el.available_seats_info.second}
									price={el.departure.price_info.second.top_price} /> 
            }
       
       {el.departure.have_first_class &&
								<TicketSeats name="Люкс"
									seats={el.available_seats_info.first}
									price={el.departure.price_info.first.top_price} />
							}

            <div className="train-choice">
            <div className='train-facilities'>
            <span className={`${el.departure.have_wifi ? 'facilities-wifi-have' : 'train-facilities-wifi'}`}></span>
            <span className={`${el.departure.is_express ? 'facilities-express-have' : 'train-facilities-express'}`}></span>
            <span className={`${el.departure.have_air_conditioning ? 'facilities-coffee-have' : 'train-facilities-coffee'}`}></span>
          </div>
							{/* <img className="groupIcons" src={groupIcons} alt="wifi-rocket-cup" /> */}

              <CustomLink to="/choicelocation">
							<button className="train-choice-btn"
								type="button"
								onClick={() => console.log("btn-click")}>Выбрать места
              </button>
              </CustomLink>
						</div>
        </div>

        
        </div>
                )
            })}
        </div>
    
)

}

export default CartsTest