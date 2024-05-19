import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../../components/CustomLink';
import TicketSeats from '../../pages/order/ResultReserchTrainItems/TicketSeats'
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
         
                   <div className='train-direction-route'>
                     <div className='train-direction-from'>
                       <div className='direction-time'>{conversionDate(trainSelection.arrival.from.datetime)}</div>
                       <div className='direction-from'>
                         <h5 className='direction-city'>{trainSelection.arrival.from.city.name}</h5>
                         <p className='direction-station'>{trainSelection.arrival.from.railway_station_name}</p>
                         <p className='direction-station'>вокзал</p>
                       </div>
                     </div> 
                     <div className='train-direction-time'>
                       <p className='travel-time'>{conversionDate(trainSelection.arrival.duration)}</p>
                       <span className='direction-arrow-from'></span>
                     </div>
                     <div className='train-direction-to'>
                       <div className='direction-time'>{conversionDate(trainSelection.arrival.to.datetime)}</div>
                       <div className='direction-to'>
                         <h5 className='direction-city'>{trainSelection.arrival.to.city.name}</h5>
                         <p className='direction-station'>{trainSelection.arrival.to.railway_station_name}</p>
                         <p className='direction-station'>вокзал</p>
                       </div>
                     </div>
                     
                   </div> 
         </div>
         <div className='train-seats-all'>
             {trainSelection.departure.have_fourth_class &&
                  <TicketSeats name="Сидячий"
									seats={trainSelection.available_seats_info.fourth}
									price={trainSelection.departure.price_info.fourth.top_price}
                  priceDep={trainSelection.departure.price_info.fourth}
                  /> 
                  
                 }
                    {trainSelection.departure.have_third_class &&
                 <TicketSeats name="Плацкарт"
									seats={trainSelection.available_seats_info.third}
									price={trainSelection.departure.price_info.third.top_price}
                  priceDep={trainSelection.departure.price_info.third}
                 
                   />
                  
                         }
                 {trainSelection.departure.have_second_class &&
                  <TicketSeats name="Купе"
									seats={trainSelection.available_seats_info.second}
									price={trainSelection.departure.price_info.second.top_price} 
                  priceDep={trainSelection.departure.price_info.second}/> 
                    }
       
                    {trainSelection.departure.have_first_class &&
								<TicketSeats name="Люкс"
									seats={trainSelection.available_seats_info.first}
									price={trainSelection.departure.price_info.first.top_price} 
                  priceDep={trainSelection.departure.price_info.first}/>
							}

        
            <div className="train-choice">
            <div className='train-facilities'>
            <span className={`${trainSelection.departure.have_wifi ? 'facilities-wifi-have' : 'train-facilities-wifi'}`}></span>
            <span className={`${trainSelection.departure.is_express ? 'facilities-express-have' : 'train-facilities-express'}`}></span>
            <span className={`${trainSelection.departure.have_air_conditioning ? 'facilities-coffee-have' : 'train-facilities-coffee'}`}></span>
             </div>
							{/* <img className="groupIcons" src={groupIcons} alt="wifi-rocket-cup" /> */}

              <CustomLink to="/pay">
							<button className="train-choice-btn"
								type="button"
								onClick={() => console.log("Изменить")}>Изменить
              </button>
              </CustomLink>
						</div>
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