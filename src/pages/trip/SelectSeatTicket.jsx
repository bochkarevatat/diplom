import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import TrainCoach from './TrainCoach'
import './SelectSeatTicket.css'

function dateFromAndTo(time) {
  if (time) {
    return new Date(time * 1000).toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  return '';
}

const SelectSeatTicket = () => {
    const trainList = useSelector( (state) => state.trainSlice.trainSelection);
    const time = dateFromAndTo(trainList.departure.duration);
    const [valueAges, setValueAges] = React.useState(2);
    const [valueChild, setValueChild] = React.useState(1);
    const [valueChildWithout, setValueChildWithout] = React.useState(0)
    
    // const [type, setType] = React.useState({
    //   first: false,
    //   second: false,
    //   third: false,
    //   fourth: false
    // });

    

    const hh = time.split(':');
    const hh1 = hh.splice(1, 2)
    console.log(hh1)
    return (
        
<div className='selection-of-seats'>

<div className='selection-of-seats-train-another'>
  <span className='selection-of-seats-train-img'></span>
  <button className='selection-of-seats-train-btn' type='button' onClick={() => console.log('select-train-btn')}>Выбрать другой поезд</button>
</div>

<div className='selection-of-seats_select-train'>

    <div className='selection-of-seats_items'>
  <div className='select-train-route'>
    <span className='select-train-img-train'></span>
    <div className='select-train-desc'>
      <h5 className='train-desc-name'>{trainList.departure.train.name}</h5> 
      <p className='train-desc-city'>{trainList.departure.from.city.name} &#8594;</p>
      <p className='train-desc-city'>{trainList.departure.to.city.name}</p>
     
    </div>
  </div>

  <div className='select-direction-time'>
    <div className='select-direction-city'>
      <h5 className='select-time'>{dateFromAndTo(trainList.departure.from.datetime)}</h5>
      <p className='select-direction-name'>{trainList.departure.from.city.name}</p>
      <p className='select-direction-station'>{`${trainList.departure.from.railway_station_name} вокзал`}</p>
    </div>
    <div className='direction-arrow'></div>
    <div className='select-direction-city'>
      <h5 className='select-time'>{dateFromAndTo(trainList.departure.to.datetime)}</h5>
      <p className='select-direction-name'>{trainList.departure.to.city.name}</p>
      <p className='select-direction-station'>{`${trainList.departure.to.railway_station_name} вокзал`}</p>
    </div>
  </div>

        <div className='selection-of-seats_duration'>
          <span className='selection-of-seats_duration-img'></span>
          <div className='selection-of-seats_duration-text'>
            <span>{hh} часов</span>
            <span>{hh1} минуты</span>
          </div>
        </div>
  </div>

  <div className='amount-tickets'>
        <h4 className='amount-tickets-title'>Количество билетов</h4>
        <div className='tickets-age'>
          <div className='tickets-age-inputs tickets-age_gray'>
            <input className='tickets-age-input' type="number" placeholder={`Взрослых - ${valueAges}`}
              value={''}
              onChange={1}
               />
            <p className='tickets-adults-desc'>Можно добавить еще {5 - valueAges} пассажиров</p>
          </div>

          <div className='tickets-age-inputs'>
            <input className='tickets-age-input' type="text" placeholder={`Детских - ${valueChild}`}
              value={''}
              onChange={1} />
            <p className='tickets-adults-desc'>Можно добавить еще {5 - valueChild} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
              в среднем на 50-65%</p>
          </div>
          <div className='tickets-age-inputs'>
            <input className='tickets-age-input' type="text" placeholder={`Детских \u00ABбез места\u00BB - ${valueChildWithout}`}
              value={''}
              onChange={3} />
            <p className='tickets-adults-desc'>Доступно только для взрослого места. Можно добавить еще {valueAges - valueChildWithout} детей.</p>
          </div>
        </div>
      </div>
      
</div>

<div className='coaches-types'>
        <h4 className='coach-type-title'>Тип вагона</h4>
        <div className='coach-types'>
          <div className='coach-type'>
            <span className={`${trainList.departure.have_fourth_class ? 'type-fourth-img-active' : 'type-fourth-img'}`}></span>
            <p className={`${trainList.departure.have_fourth_class ? 'type-text-active' : 'type-text'}`}>Сидячий</p>
          </div>
          <div className='coach-type'>
          <span className={`${trainList.departure.have_third_class ? 'type-third-img-active' : 'type-third-img'}`}></span>
            <p className={`${trainList.departure.have_third_class ? 'type-text-active' : 'type-text'}`}>Плацкарт</p>
          </div>
          <div className='coach-type'>
          <span className={`${trainList.departure.have_second_class ? 'type-second-img-active' : 'type-second-img'}`}></span>
            <p className={`${trainList.departure.have_second_class ? 'type-text-active' : 'type-text'}`}>Купе</p>
          </div>
          <div className='coach-type'>
          <span className={`${trainList.departure.have_first_class ? 'type-first-img-active' : 'type-first-img'}`}></span>
            <p className={`${trainList.departure.have_first_class ? 'type-text-active' : 'type-text'}`}>Люкс</p>
          </div>
        </div>
        </div>
           <TrainCoach /> 
       
         
       
</div>
  
    )
}

export default SelectSeatTicket