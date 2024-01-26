import React from 'react';
import ReactCompoundSlider from './components/ReactCompoundSlider';
import ReactSliderDouble from './components/ReactSliderDouble';
import './SideBarSearch.css';
import subctract from '../order/img/subtract.png';
import iconMinus from '../order/img/minus.png';

function SideBarSearch (progress) {

  const [check, setCheck] = React.useState({coupe: false, reservedSeat: false, seat: false, star: false, wifi:false, express:false
  });

 

  

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
							// value={props.form.whereFromDate}
						/>
					</div>

          <p>Дата возвращения</p>
					<div className="treep-from">
						<input className="treep-from"
							type="date"
              placeholder='ДД.ММ.ГГ'
							// onChange={}
							// value={}
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
            <ReactCompoundSlider />   {/* вставиать данные, как? идет перезагрузка, не должна*/}
          
            </div>
          </div>

          <hr className='hr-filter'></hr>

          <div>
						<div className="there-group">
							<div><img className="subctract" src={subctract} alt="" /><span className="there-title">Туда</span></div>
								
							<img className="iconMinus"
								// onClick={() => setCustomRangeCostFrom(false)}
								src={iconMinus}
                //  alt="иконка плюс"
                 />
						</div>

						<form className="">
							<label htmlFor="">Время отбытия</label>
							<ReactSliderDouble />
						</form>

						<form className="">
							<div className="">
								<label htmlFor="c">Время прибытия</label>
							</div>
							{/* <ReactSliderDouble/> */}
						</form>
					</div> :
					<div className="">
						<p className="">
							<img className=""
								// src={iconThere}
								alt="иконка туда" />Туда</p>
						<img className=""
							// onClick={() => setCustomRangeCostFrom(true)}
							// src={iconPlus} 
              alt="иконка плюс" />
					</div>
          
          





        </div>
      </div>
    )
  }
  
  export default SideBarSearch