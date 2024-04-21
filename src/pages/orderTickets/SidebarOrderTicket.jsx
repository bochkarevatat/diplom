import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import './SidebarOrderTicket.css';
import iconFrom from '../../assets/img/from.png';
import iconMinus from '../../assets/img/minus.png';
import iconThere from '../../assets/img/there.png';
import iconPlus from '../../assets/img/plus.png';
import iconRubleSmall from '../../assets/img/rubleIcon.png';

function conversionDate(time) {
    if (time) {
      return new Date(time * 1000).toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    return '';
  };

const SidebarOrderTicket = () =>{
    const [ hide, setHide] = React.useState(false);
    const [ hideFrom, setHideFrom] = React.useState(false);
    const whereFromDate = useSelector( (state) => state.filter.fromDate);
    const whereToDate = useSelector( (state) => state.filter.toDate);
    const objTicket = useSelector( (state) => state.slicePrice.objTicket);
    const changeChildTickets = useSelector( (state) => state.slicePrice.fourthClass.seatsChild);
    const changeAgeTickets = useSelector( (state) => state.slicePrice.firstClass.seatsAge);
    const trainSelection = useSelector( (state) => state.trainSlice.trainSelection);
    const totalPriceAll = useSelector( (state) => state.slicePrice.totalPriceAll);
    const [hiddenPassengers, setHiddenPassengers] = React.useState('');
    // console.log(changeChildTickets, '<=changeChildTickets');
    console.log(changeAgeTickets, '<=changeAgeTickets');


    function showPassengers() {
        if (hiddenPassengers !== 'none') {
          setHiddenPassengers('none');
        } else {
          setHiddenPassengers('');
        }
      }

    return (
        <div className="sidebar-left">
          <div className="sidebar-date">
            <h3 className="sidebar-datе-title">детали поездки</h3>
       
  
            <hr className='hr-filter'></hr>
  
  
            <details className="details-there">
                    <summary className='details-there-order'>
                          <span className={`${hide ? 'there-title-hidden' : 'there-title_title'}`}>
                              <img className="there-title_img"
                                onClick={() => setHide(true)}
                                  src={iconThere}
                                  alt="иконка туда" />Туда
                            </span>
                                  

                          <img className={`${hide ? 'there-title-hidden' : 'iconMinusPlus'}`}    
                              onClick={() => setHide(true)}
                              src={iconPlus} 
                                alt="иконка плюс" />
                    </summary>
                    

                <div className={`${hide ? 'there-title_title' : 'there-title-hidden'}`}>
                              <div className="there-group">
                                <div><img className="there-title_img" src={iconThere} alt="" /><span className="there-title-order">Туда</span></div>
                                <span>  <span className='there-head-date-order'>{whereFromDate}</span></span>  
                                <img className="iconMinusPlus"
                                  onClick={() => setHide(false)}
                                  src={iconMinus}
                  //  alt="иконка плюс"
                  
                   />
                                </div>
  
                    <div className='there-train-order'>
                        
                        <h5 className='there-train-title'>№ Поезда</h5>
                        <p className='there-train-text'>{trainSelection.departure.train._id.slice(0, 3)}</p>
                       
                     </div>      
                     <div className='there-train-name'>
                        <h5 className='there-train-title'>Название</h5>
                        <div className='there-train-text-order'>
                            <p  className='there-train-text'>{trainSelection.departure.from.city.name}</p>
                            <p  className='there-train-text'>{trainSelection.departure.to.city.name}</p>
                        </div>
                    </div>

                    <div className='there-order'>
                        <div className='there-route-from'>
                         <div className='there-time'>{conversionDate(trainSelection.departure.from.datetime)}</div>
                        <div className='there-date'>{whereFromDate}</div>
                        <div className='there-from'>
                            <h5 className='there-city'>{trainSelection.departure.from.city.name}</h5>
                            <p className='there-station'>{trainSelection.departure.from.railway_station_name}</p>
                            <p className='there-station'>вокзал</p>
                        </div>
                        </div>

                        <div className='there-arrow-time'>
                            <p className='there-travel-time'>{conversionDate(trainSelection.departure.duration)}</p>
                            <span className='there-direction-arrow'></span>
                        </div>

                        <div className='there-route-to'>
                         <div className='there-time'>{conversionDate(trainSelection.departure.to.datetime)}</div>
                        <div className='there-date'>{whereToDate}</div>
                        <div className='there-to'>
                            <p className='there-city'>{trainSelection.departure.to.city.name}</p>
                            <p className='there-station'>{trainSelection.departure.to.railway_station_name}</p>
                            <p className='there-station'>вокзал</p>
                        </div>
                        </div>

                    </div> 
                    


            </div> 

            </details>
  
            <hr className='hr-filter'></hr>

            <details className="details-from">
            <summary>
                          <span className={`${hideFrom ? 'there-title-hidden' : 'there-title_title'}`}>
                              <img className="there-title_img"
                  onClick={() => setHide(true)}
                                  src={iconFrom}
                                  alt="иконка туда" />Обратно</span>
                          <img className={`${hideFrom ? 'there-title-hidden' : 'iconMinusPlus'}`}    
                              onClick={() => setHideFrom(true)}
                              src={iconPlus} 
                alt="иконка плюс" />
                </summary>
  
                <div className={`${hideFrom ? 'there-title_title' : 'there-title-hidden'}`}>
                <div className="there-group">
                                <div><img className="there-title_img" src={iconFrom} alt="" /><span className="there-title-order">Обратно</span></div>
                                <span>  <span className='there-head-date-order'>{whereFromDate}</span></span>  
                                <img className="iconMinusPlus"
                                  onClick={() => setHide(false)}
                                  src={iconMinus}
                  //  alt="иконка плюс"
                  
                   />
                                </div>
                          <div className='there-train-order'>
                        
                        <h5 className='there-train-title'>№ Поезда</h5>
                        <p className='there-train-text'>{trainSelection.arrival.train._id.slice(0, 3)}</p>
                       
                     </div>      
                     <div className='there-train-name'>
                        <h5 className='there-train-title'>Название</h5>
                        <div className='there-train-text-order'>
                            <p  className='there-train-text'>{trainSelection.arrival.from.city.name}</p>
                            <p  className='there-train-text'>{trainSelection.arrival.to.city.name}</p>
                        </div>
                    </div>

                    <div className='there-order'>
                        <div className='there-route-from'>
                         <div className='there-time'>{conversionDate(trainSelection.arrival.from.datetime)}</div>
                        <div className='there-date'>{whereToDate}</div>
                        <div className='there-from'>
                            <h5 className='there-city'>{trainSelection.arrival.from.city.name}</h5>
                            <p className='there-station'>{trainSelection.arrival.from.railway_station_name}</p>
                            <p className='there-station'>вокзал</p>
                        </div>
                        </div>

                        <div className='there-arrow-time'>
                            <p className='there-travel-time'>{conversionDate(trainSelection.arrival.duration)}</p>
                            <span className='there-direction-arrow'></span>
                        </div>

                        <div className='there-route-to'>
                         <div className='there-time'>{conversionDate(trainSelection.arrival.to.datetime)}</div>
                        <div className='there-date'>{whereToDate}</div>
                        <div className='there-to'>
                            <p className='there-city'>{trainSelection.arrival.to.city.name}</p>
                            <p className='there-station'>{trainSelection.arrival.to.railway_station_name}</p>
                            <p className='there-station'>вокзал</p>
                        </div>
                        </div>

                    </div> 
                </div> 
                
                       
                </details>
                <hr className='hr-filter'></hr>

                <div className='details-passengers'>
                    <div className='details-passengers-head'>
                    
                    <h4 className='pass-head-title'>Пассажиры</h4>
                    <div className={hiddenPassengers === '' ? 'pass-head-open-down' : 'pass-head-open-up'} onClick={showPassengers}></div>
                    </div>

                    <div className={hiddenPassengers}>
                        <div className='pass-amount-price'>
                            <div className='pass-amount'>
                            <p className='amount'>{objTicket.numberOld}</p>
                            <p className='pass-ages'>Взрослых</p>
                            </div>
                            <div className='pass-price'>
                                <span  className='pass-amount'> 
                                <p className='pass-price-text'>{objTicket.sumOld}</p>
                           <img className="iconRubleSmall" src={iconRubleSmall} alt="иконка - рубль" />
                           </span>
                            </div>
                        </div>
                        <div className='pass-amount-price'>
                            <div className='pass-amount'>
                            <p className='amount'>{objTicket.numberChild}</p>
                            <p className='pass-ages'>Ребенок</p>
                            </div>
                            <div className='pass-price'>
                            <span className='pass-amount'> 
                            <p className='pass-price-text'>{objTicket.sumChild}</p>
                           <img className="iconRubleSmall" src={iconRubleSmall} alt="иконка - рубль" />
                           </span>
                           
                            </div>
                        </div>
        </div>
                </div>


                      <hr className='hr-filter'></hr>
                      <div className='train-all-price'>
                      <p>итог</p>
                      <span>
                      <span className='train-price-yell'>{objTicket.totalPriceAll}</span>
                      <img className="iconRubleSmall" src={iconRubleSmall} alt="иконка - рубль" /></span>
                      
                      </div>
                      
                </div>  
                      </div> 

                      
  
  
        
      )
}

export default SidebarOrderTicket