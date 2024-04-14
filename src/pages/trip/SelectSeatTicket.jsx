import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import TrainCoach from './TrainCoach';
import './SelectSeatTicket.css';
import { changeAgeTickets} from '../../redux/slices/SlicePrice';

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
    const classType = useSelector( (state) => state.trainSlice.classType);
    const time = dateFromAndTo(trainList.departure.duration);
    const [valueAges, setValueAges] = React.useState(1);
    const [valueChild, setValueChild] = React.useState(1);
    const [valueChildWithout, setValueChildWithout] = React.useState(0)
    const fourthClass = useSelector( (state) => state.trainSlice.fourthClass);
    const [summ, setSumm]= React.useState(0)
    const dispatch = useDispatch();
    const topPrice = useSelector( (state) => state.slicePrice.topPrice);
    const rafValueAges = React.useRef(null);
    // console.log(inputValueAges)

    function inputAges(ev) {
    //  console.log(, 'hhhhhh')
      if (/^[0-5]$/.test(ev.target.value)) {
        dispatch(changeAgeTickets({
          classType: classType,
          seatsAge: Number(ev.target.value) 
        }));
        setValueAges(Number(ev.target.value));
      }
    if(ev.target.classList.contains('tickets-age-input')){
      setSumm(ev.target.value )
        console.log(summ)
    }
    }
    console.log()
    

    // const inputChild = (ev) => {
    //   if (/^[0-5]$/.test(ev.target.value)) {
    //     dispatch(changeChildTickets({
    //       classType: coaches[0].coach.class_type,
    //       seatsChild: Number(ev.target.value)
    //     }));
    //     setValueChild(Number(ev.target.value));
    //   }
    // }
    // const [type, setType] = React.useState({
    //   first: false,
    //   second: false,
    //   third: false,
    //   fourth: false
    // });

    // console.log(trainList, 'trainList')

    const hh = time.split(':');
    const hh1 = hh.splice(1, 2)
    // console.log(hh1)
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
          <div   className='tickets-age-inputs tickets-age_gray'>
            <input className='tickets-age-input'  type="text" placeholder={`Взрослых - ${valueAges}`}
              value={''}
              ref={rafValueAges}
              onChange={(ev) => inputAges(ev)}
               />
            <p className='tickets-adults-desc'>Можно добавить еще {5 - valueAges} пассажиров</p>
          </div>

          <div className='tickets-age-inputs'>
            <input className='tickets-age-input' type="number" placeholder={`Детских - ${valueChild}`}
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
           <section className="price-right">
           <div className="">{topPrice*valueAges}<span><img src='img/rubleIcon.png'></img></span></div>
           </section>
           
        </div>
        
    )
}

export default SelectSeatTicket