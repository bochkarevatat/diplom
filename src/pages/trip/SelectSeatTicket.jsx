import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import TrainCoach from './TrainCoach';
import './SelectSeatTicket.css';
import { changeAgeTickets, setBottomPrice, setSeatSelectedTrue, setTotalPriceAll, setTotalPriceAllCh, changeChildTickets, setObjTicket, setPrice} from '../../redux/slices/SlicePrice';

function dateFromAndTo(time) {
  if (time) {
    return new Date(time * 1000).toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  return '';
}

const SelectSeatTicket = (train) => {
  

  
    const classType = useSelector( (state) => state.trainSlice.classType);

    const trainList = useSelector( (state) => state.trainSlice.trainSelection);
    const totalPriceAll = useSelector( (state) => state.slicePrice.totalPriceAll);
    const totalPriceAllCh = useSelector( (state) => state.slicePrice.totalPriceAllCh);
    const objTicket = useSelector( (state) => state.slicePrice.objTicket);
    const trainCoach = useSelector( (state) => state.slicePrice.trainCoach);
    const ticket = useSelector( (state) => state.slicePrice.ticket);
    // const {items, totalPrice} = useSelector( state => state.sliceTicke);
    // const time = dateFromAndTo(train.departure.duration);
    const [valueAges, setValueAges] = React.useState(0);
    
    const [valueChild, setValueChild] = React.useState(0);
    const price =useSelector( (state) => state.slicePrice.price)
    // const [itemTicket, setItemTicket] = React.useState([]);
    const [valueChildWithout, setValueChildWithout] = React.useState(0)
    // const fourthClass = useSelector( (state) => state.trainSlice.fourthClass);
    // const [topPlaces, setTopPlaces]= React.useState(0)
    const [active, setActive]= React.useState(false);
    const [activeCh, setActiveCh]= React.useState(false)
    const [summ, setSumm]= React.useState(0);
    const [catArrAllsumm, setCatArrAllsumm]= React.useState(0);
    const seatSelectedTrue =useSelector( (state) => state.slicePrice.seatSelectedTrue);
    const [arr, setArr]= React.useState({
      el: 0,
      price: 0,
    });
    // const [price, setPrice]= React.useState(0)
    const dispatch = useDispatch();
    // const topPrice = useSelector( (state) => state.slicePrice.topPrice);
    // const bottomPrice = useSelector( (state) => state.slicePrice.bottomPrice);
    const rafValueAges = React.useRef(null);
    const [summAll, setSummAll]= React.useState(0);
    const [summAllCh, setSummAllCh]= React.useState(0)
    // console.log(inputValueAges)
    const items = useSelector( (state) => state.sliceTicket.items);

    const addActivInput =(el) =>{
      setActive(true)
    }
    const addActivInputChild =()=>{
      setActiveCh(true)
    }
// плацкарт
    React.useEffect(() =>{
      
        const Debounce = setTimeout(() => {
          if(trainCoach.class_type === 'third' && active === true && ticket>0){
            console.log('item', items)
            setActiveCh(false)
            if(ticket % 2 == 1 && ticket < 33 ){
              // console.log("нечетное", ticket, price)
              dispatch(setPrice(trainCoach.bottom_price))
              // console.log("нечетное", ticket, trainCoach.bottom_price)
            } else
            if(ticket % 2 == 0 && ticket<33 ){
              dispatch(setPrice(trainCoach.top_price));
              // console.log("четное", price) 
             } else
              {
                dispatch(setPrice(trainCoach.side_price));
            }

           
              if(price !==0 &&  totalPriceAll.length < valueAges){
                dispatch(setTotalPriceAll(price))
                console.log( price, totalPriceAll, "получилось взрослые")  
              }
            }

            if(trainCoach.class_type === 'third' && activeCh === true && ticket>0){
              setActive(false)
              console.log( activeCh, "получилось activeCh")  
              if(ticket % 2 == 1 && ticket < 33 ){
                dispatch(setPrice(trainCoach.bottom_price))
                console.log( price, "получилось activeCh") 
              } else
              if(ticket % 2 == 0 && ticket<33 ){
                dispatch(setPrice(trainCoach.top_price));
               } else{
                  dispatch(setPrice(trainCoach.side_price));
              }
              if(price !==0 &&  totalPriceAllCh.length < valueChild){
                dispatch(setTotalPriceAllCh(price))
                console.log( price, totalPriceAllCh, "получилось дети")   
              }
            }

            
            // setCatArrAllsumm([...totalPriceAll, ...totalPriceAllCh])
            // console.log(setCatArrAllsumm([...totalPriceAll, ...totalPriceAllCh]))
            // setSummAllCh(catArrAllsumm.reduce((acc, number) => acc + number, 0))
            // console.log(summAll)
            dispatch(setObjTicket({
              numberOld: valueAges,
              numberChild: valueChild,
              priceChild: totalPriceAllCh,
              sumOld: totalPriceAll.reduce((acc, number) => acc + number, 0),
              sumChild: totalPriceAllCh.reduce((acc, number) => acc + number, 0)*0.65,
              totalPriceAll: objTicket.sumOld+objTicket.sumChild}))
            }, 1000);

            
              return () => clearTimeout(Debounce);
             
    },[ticket, totalPriceAll, totalPriceAllCh, summAll]);

    // купе
    React.useEffect(() =>{
      
      const Debounce = setTimeout(() => {
        if(trainCoach.class_type === 'second' && active === true && ticket>0){
          console.log('item', items)
          setActiveCh(false)
          if(ticket % 2 == 1 && ticket < 33 ){
            dispatch(setPrice(trainCoach.bottom_price))
          } else {
            dispatch(setPrice(trainCoach.top_price));
           } 

         
            if(price !==0 &&  totalPriceAll.length < valueAges){
              dispatch(setTotalPriceAll(price))
              console.log( price, totalPriceAll, "получилось взрослые купе")  
            }
          }

          if(trainCoach.class_type === 'second' && activeCh === true && ticket>0){
            setActive(false)
            console.log( activeCh, "получилось activeCh")  
            if(ticket % 2 == 1 && ticket < 33 ){
              dispatch(setPrice(trainCoach.bottom_price))
              console.log( price, "получилось activeCh") 
            } else{
              dispatch(setPrice(trainCoach.top_price));
             
            if(price !==0 &&  totalPriceAllCh.length < valueChild){
              dispatch(setTotalPriceAllCh(price))
              console.log( price, totalPriceAllCh, "получилось дети купе")   
            }
          }
        }
          dispatch(setObjTicket({
            numberOld: valueAges,
            numberChild: valueChild,
            priceChild: totalPriceAllCh,
            sumOld: totalPriceAll.reduce((acc, number) => acc + number, 0),
            sumChild: totalPriceAllCh.reduce((acc, number) => acc + number, 0)*0.65,
            totalPriceAll: objTicket.sumOld+objTicket.sumChild}))
          }, 1000);

          
            return () => clearTimeout(Debounce);
           
  },[ticket, totalPriceAll, totalPriceAllCh, totalPriceAll]);

    // console.log(trainCoach)


  // люкс
  
  React.useEffect(() =>{
      
    const Debounce = setTimeout(() => {
      if(trainCoach.class_type === 'first' && active === true && ticket>0){
        console.log('item', items)
        setActiveCh(false)
        dispatch(setPrice(trainCoach.price))

       
          if(price !==0 &&  totalPriceAll.length < valueAges){
            dispatch(setTotalPriceAll(price))
            console.log( price, totalPriceAll, "получилось взрослые купе")  
          }
        }

        if(trainCoach.class_type === 'second' && activeCh === true && ticket>0){
          setActive(false)
          dispatch(setPrice(trainCoach.price))
          console.log( activeCh, "получилось activeCh")  
          if(price !==0 &&  totalPriceAllCh.length < valueChild){
            dispatch(setTotalPriceAllCh(price))
            console.log( price, totalPriceAllCh, "получилось дети купе")   
          }
      }
        dispatch(setObjTicket({
          numberOld: valueAges,
          numberChild: valueChild,
          priceChild: totalPriceAllCh,
          sumOld: totalPriceAll.reduce((acc, number) => acc + number, 0),
          sumChild: totalPriceAllCh.reduce((acc, number) => acc + number, 0)*0.65,
          totalPriceAll: objTicket.sumOld+objTicket.sumChild}))
        }, 1000);

        
          return () => clearTimeout(Debounce);
         
},[ticket, totalPriceAll, totalPriceAllCh, totalPriceAll]);


// сидячие места
  
React.useEffect(() =>{
      
  const Debounce = setTimeout(() => {
    if(trainCoach.class_type === 'forth' && active === true && ticket>0){
     setActiveCh(false)
     if(ticket % 2 == 1 && ticket < 33 ){
      // console.log("нечетное", ticket, price)
      dispatch(setPrice(trainCoach.bottom_price))
      // console.log("нечетное", ticket, trainCoach.bottom_price)
    } else
    if(ticket % 2 == 0 && ticket<33 ){
      dispatch(setPrice(trainCoach.top_price));
      // console.log("четное", price) 
     } else
      {
        dispatch(setPrice(trainCoach.side_price));
    }

     
        if(price !==0 &&  totalPriceAll.length < valueAges){
          dispatch(setTotalPriceAll(price))
          console.log( price, totalPriceAll, "получилось взрослые купе")  
        }
      }

      if(trainCoach.class_type === 'second' && activeCh === true && ticket>0){
        setActive(false)
        dispatch(setPrice(trainCoach.price))
        console.log( activeCh, "получилось activeCh")  
        if(price !==0 &&  totalPriceAllCh.length < valueChild){
          dispatch(setTotalPriceAllCh(price))
          console.log( price, totalPriceAllCh, "получилось дети купе")   
        }
    }
      dispatch(setObjTicket({
        numberOld: valueAges,
        numberChild: valueChild,
        priceChild: totalPriceAllCh,
        sumOld: totalPriceAll.reduce((acc, number) => acc + number, 0),
        sumChild: totalPriceAllCh.reduce((acc, number) => acc + number, 0)*0.65,
        totalPriceAll: objTicket.sumOld+objTicket.sumChild}))
      }, 1000);

      
        return () => clearTimeout(Debounce);
       
},[ticket, totalPriceAll, totalPriceAllCh, totalPriceAll]);
  console.log( objTicket, "получилось")  
    
    
    
    
    
    function inputAges(ev) {
 
      if (/^[0-5]$/.test(ev.target.value)) {
        
        dispatch(changeAgeTickets({
          classType: classType,
          seatsAge: Number(ev.target.value) 
          
        }));
       
        setValueAges(Number(ev.target.value));
      }
    if(ev.target.classList.contains('tickets-age-input')){
      setSumm(ev.target.value )
        // console.log(summ)
    }
    }

    
    


    function inputAgesCh(ev) {
      
        if (/^[0-3]$/.test(ev.target.value)) {
          dispatch(changeChildTickets({
            classType: classType,
            seatsChild: Number(ev.target.value) 
          }));
          setValueChild(Number(ev.target.value));
        }
      if(ev.target.classList.contains('tickets-age-input')){
        setSumm(ev.target.value )
      }
      }
      
     
    // dispatch(setTotalPriceAll(topPrice*valueAges))

    // const hh = dateFromAndTo(train.departure.duration).split(':');
    // const hh1 = hh.splice(1, 2)
   
// console.log(objTicket, 'objTicket')
   
    return (
      <div >    
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
            <span>{dateFromAndTo(trainList.departure.duration).split(':').splice(0, 1)} часов</span>
            <span>{(dateFromAndTo(trainList.departure.duration).split(':')).splice(1, 2)} минуты</span>
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
              onClick={(e) => addActivInput(e.target.value)}
               />
            <p className='tickets-adults-desc'>Можно добавить еще {5 - valueAges} пассажиров</p>
          </div>

          <div className='tickets-age-inputs'>
            <input className='tickets-age-input' type="text" placeholder={`Детских - ${valueChild}`}
              value={''}
              onChange={(ev) => inputAgesCh(ev)}
              onClick={(e) => addActivInputChild(e.target.value)}
              />
              
            <p className='tickets-adults-desc'>Можно добавить еще {5 - valueChild} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
              в среднем на 50-65%</p>
          </div>
          <div className='tickets-age-inputs'>
            <input className='tickets-age-input' type="text" placeholder={`Детских \u00ABбез места\u00BB - ${valueChildWithout}`}
              value={''}
              onChange={(ev) => inputAgesCh(ev)} />
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
           <div className="">{objTicket.totalPriceAll}<span><img src='img/rubleIcon.png'></img></span></div>
           </section>
           
        </div>
         
        </div> 
    )
}

export default SelectSeatTicket