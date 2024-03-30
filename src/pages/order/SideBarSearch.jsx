import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import ReactCompoundSlider from './components/ReactCompoundSlider';
import ReactSliderDouble from './components/ReactSliderDouble';
import './SideBarSearch.css';
import iconFrom from '../../assets/img/from.png';
import iconMinus from '../../assets/img/minus.png';
import iconThere from '../../assets/img/there.png';
import iconPlus from '../../assets/img/plus.png'
import CardLastTicket from './CardLastTicket'
import {setDateFrom} from '../../redux/slices/FilterTrainSlice';

function SideBarSearch () {

  const [check, setCheck] = React.useState({coupe: false, reservedSeat: false, seat: false, star: false, wifi:false, express:false
  });

  const [ hide, setHide] = React.useState(false)
  const [ hideFrom, setHideFrom] = React.useState(false)

  const whereFromDate = useSelector( (state) => state.filter.fromDate);
  const whereToDate = useSelector( (state) => state.filter.toDate);
    return (
      <div className="sidebar-left">
        <div className="sidebar-date">
        <form className="sidebar-date-from" action="input">
					<p>Дата поездки</p>
					<div className="treep-from">
						<input className="treep-from"
							type="date"
              placeholder='ДД.ММ.ГГ'
							// onChange={handleWhereFromDate}
							value={whereFromDate}
						/>
					</div>

          <p>Дата возвращения</p>
					<div className="treep-from">
						<input className="treep-from"
							type="date"
              placeholder='ДД.ММ.ГГ'
							// onChange={}
							value={whereToDate}
						/>
					</div>

          <hr className='hr-filter'></hr>

      <div className='filter-group'>

          <div className="check-router">
          <span className="router-img-coupe"></span>
          <p className="router-text">Купе</p>
          <div className={`check-item check-${check.coupe ? 'true' : 'false'}`}
            onClick={() => setCheck({ ...check, coupe: !check.coupe })}>
            <input type="checkbox" className="check-input" />
          </div>
          </div>

          <div className="check-router">
          <span className="router-img_reserved-seat"></span>
          <p className="router-text">Плацкарт</p>
          <div className={`check-item check-${check.reservedSeat ? 'true' : 'false'}`}
            onClick={() => setCheck({ ...check, reservedSeat: !check.reservedSeat })}>
            <input type="checkbox" className="check-input" />
          </div>
          </div>

          <div className="check-router">
          <span className="router-img_seat"></span>
          <p className="router-text">Сидячий</p>
          <div className={`check-item check-${check.seat ? 'true' : 'false'}`}
            onClick={() => setCheck({ ...check, seat: !check.seat })}>
            <input type="checkbox" className="check-input" />
          </div>
          </div>

          <div className="check-router">
          <span className="router-img_star"></span>
          <p className="router-text">Люкс</p>
          <div className={`check-item check-${check.star ? 'true' : 'false'}`}
            onClick={() => setCheck({ ...check, star: !check.star })}>
            <input type="checkbox" className="check-input" />
          </div>
          </div>

          <div className="check-router">
          <span className="router-img_wifi"></span>
          <p className="router-text">Wi-fi</p>
          <div className={`check-item check-${check.wifi ? 'true' : 'false'}`}
            onClick={() => setCheck({ ...check, wifi: !check.wifi })}>
            <input type="checkbox" className="check-input" />
          </div>
          </div>

          <div className="check-router">
          <span className="router-img_express"></span>
          <p className="router-text">Экспресс</p>
          <div className={`check-item check-${check.express ? 'true' : 'false'}`}
            onClick={() => setCheck({ ...check, express: !check.express })}>
            <input type="checkbox" className="check-input" />
          </div>
          </div>

          </div>
				</form>
        <hr className='hr-filter'></hr>


        <div className='price-filter'>       
          <p className="price-text">Стоимость</p>
          <div className='price-router'>
            <div className="range-input-in"><span>от</span><span className='from'>до</span></div>
            <ReactCompoundSlider onChange={(e)=>(e)}/> 
            
              {/* вставиать данные, как? идет перезагрузка, не должна*/}
          
            </div>
          </div>

          <hr className='hr-filter'></hr>



          


					<details className="details-there">
          <summary>
						<span className={`${hide ? 'there-title-hidden' : 'there-title_title'}`}>
							<img className="there-title_img"
                onClick={() => setHide(true)}
								src={iconThere}
								alt="иконка туда" />Туда</span>
						<img className={`${hide ? 'there-title-hidden' : 'iconMinusPlus'}`}    
							onClick={() => setHide(true)}
							src={iconPlus} 
              alt="иконка плюс" />
              </summary>

              <div className={`${hide ? 'there-title_title' : 'there-title-hidden'}`}>
						    <div className="there-group">
							  <div><img className="there-title_img" src={iconThere} alt="" /><span className="there-title">Туда</span></div>
								
							  <img className="iconMinusPlus"
								onClick={() => setHide(false)}
								src={iconMinus}
                //  alt="иконка плюс"
                 />
						</div>

						<form className="departure-time">
							<label htmlFor="">Время отбытия</label>
							<ReactSliderDouble onChange={(e)=>(e)}/>
						</form>

						<form className="arrival-time">
							
							<label htmlFor="c">Время прибытия</label>
							<ReactSliderDouble onChange={(e)=>(e)}/>
						</form>
					</div> 
					</details>

          <hr className='hr-filter'></hr>
{/* обратно */}
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
							  <div><img className="there-title_img" src={iconFrom} alt="" /><span className="there-title">Обратно</span></div>
								
							  <img className="iconMinusPlus"
								onClick={() => setHideFrom(false)}
								src={iconMinus}
                //  alt="иконка плюс"
                 />
						</div>

						<form className="departure-time">
							<label htmlFor="">Время отбытия</label>
							<ReactSliderDouble onChange={(e)=>(e)}/>
						</form>

						<form className="arrival-time">
							
							<label htmlFor="c">Время прибытия</label>
							<ReactSliderDouble onChange={(e)=>(e)}/>
						</form>
					</div> 
					</details>
          
          





        </div>
        
        <CardLastTicket/>
      
       
      </div>

      
    )
  }
  
  export default SideBarSearch