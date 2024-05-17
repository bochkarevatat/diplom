import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../../components/CustomLink';

import CartsTest from '../../pages/order/ResultReserchTrainItems/CartsTest';

function conversionDate(time) {
    if (time) {
      return new Date(time * 1000).toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    return '';
  }


const TrainCard = () =>{

    const trainSelection = useSelector( (state) => state.trainSlice.trainSelection);
console.log(trainSelection)
    return(
        <>

        
        {trainSelection.length !==0 ?  
                   <div className='train-name-items'>
                   <div className='train-name'>
                   <span className='train-name-image'></span>
                   
                  
                  
                   <h5 className='train-name-text'>{trainSelection.departure.train.name}</h5>
                   <div className='train-name-direction'>
                     <p className='train-name-city'>&#8594;{trainSelection.departure.from.city.name}</p>
                     <p className='train-name-city'>&#8594;{trainSelection.departure.to.city.name}</p>
                     {/* <p className='train-name-city'>&#171;{el.arrival.train.name}&#187;</p> */}
                   </div>
                   
                  
                   </div>
                   
                   
                <div className='train-direction'>
                   <div className='train-direction-route'>
                     <div className='train-direction-from'>
                       <div className='direction-time'>{conversionDate(trainSelection.departure.from.datetime)}</div>
                       <div className='direction-from'>
                         <h5 className='direction-city'>{trainSelection.departure.from.city.name}</h5>
                         <p className='direction-station'>{trainSelection.departure.from.railway_station_name}</p>
                         <p className='direction-station'>вокзал</p>
                       </div>
                     </div>
                     <div className='train-direction-time'>
                       <p className='travel-time'>{conversionDate(trainSelection.departure.duration)}</p>
                       <span className='direction-arrow'></span>
                     </div>
                     <div className='train-direction-to'>
                       <div className='direction-time'>{conversionDate(trainSelection.departure.to.datetime)}</div>
                       <div className='direction-to'>
                         <h5 className='direction-city'>{trainSelection.departure.to.city.name}</h5>
                         <p className='direction-station'>{trainSelection.departure.to.railway_station_name}</p>
                         <p className='direction-station'>вокзал</p>
                       </div>
                     </div>
                     
                   </div>
         
                   {/* <div className='train-direction-route'>
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
                     
                   </div> */}
         </div>
                 </div>:
                    <div>
                      <h2>ждем...</h2>
               {/* <Blogpage/> */}
          </div>
              } 
        </>
 


    )

}

export default TrainCard