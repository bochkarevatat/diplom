import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './TrainButton.css'
import { setTicket} from '../../../redux/slices/SlicePrice';
import {addSeatInTicket, removeTicket, clearTicket} from '../../../redux/slices/SliceTicket';
import { changeAgeTickets, setBottomPrice, setSeatSelectedTrue, setTotalPriceAll, changeChildTickets, setObjTicket, setPrice} from '../../../redux/slices/SlicePrice';



function haveSeatsOrNot(numScheme, coach){
  let result = 'seat-not-have';
  coach.map((e) => {
    if (e.index === numScheme) {
      if (e.available) {
        return result = 'seat-have';
      }
    }
    return null;
  });
  return result;
}

// плацкарт

const TrainButtonThird = (( {arrSelectThird}) => {
  const dispatch = useDispatch();
  const ticketTrue = useSelector( (state) => state.slicePrice.ticketTrue);
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const ticket = useSelector( (state) => state.slicePrice.ticket);
  const items = useSelector( (state) => state.sliceTicket.items);
  const id = useSelector( (state) => state.sliceTicket.idSeat);
  const trainCoach = useSelector( (state) => state.slicePrice.trainCoach);
  const price =useSelector( (state) => state.slicePrice.price);
  const seatSelectedTrue =useSelector( (state) => state.slicePrice.seatSelectedTrue);
  
  const [item, setItem]= React.useState([]);
   // const [id, setId]= React.useState();
  // const [itemTicket, setItemTicket] = React.useState([]);
  
  const addTicketEx = (el, elTar, id)=>{
    elTar.classList.toggle('seat-selected');
    console.log(elTar, el, id)
    if(el){
      setItem([...el])
      console.log(el, item, 'добавление')
      // dispatch(addSeatInTicket(Number(el)))
     
        dispatch(setTicket(el))
        // if(elTar.classList.contains('seat-selected')){
        //   elTar.classList.remove('seat-selected')
        //   console.log('удаление')
        //   items.filter((number) => number !== el);
          
        //   console.log(elTar, items, 'массив elTar')
        // }
    }
    
     
    
    
    // здесь не работает, конфликт или так нельзя?
    
    // if(elTar.classList.contains('seat-selected')){
    //   dispatch(removeTicket(Number(el)))
    //   dispatch(setSeatSelectedTrue(true))
    //   console.log("seatSelectedTrue", seatSelectedTrue)
    //   if(el % 2 == 1 && el < 33 ){
             
    //     // setPrice(trainCoach.bottom_price)
    // console.log("нечетное", ticket, price)
    //   } else
    //   if(el % 2 == 0 && el<33 ){
    //     // setPrice(trainCoach.top_price);
        
    //     // console.log("четное", price) 
    //    } else
    //     {
    //       // setPrice(trainCoach.side_price);
          
    //     // console.log("боковое", ticket)  
    //   }
     
    // }
  }
 

  React.useEffect(() =>{
    if(items.length>8){
      dispatch(clearTicket())
    }
    if(ticket !==0){
      // console.log(items, ticket, "no current ticket")
    }
    
  }, [ticket])
  



  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='top-row-select_coach'>
              {arrSelectThird.topWindow.map((el, id) => {
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
        </div>
  
        <div className='bottom-row-select_coach'>
            {arrSelectThird.topAisle.map((el) => {
              return (
              <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
              )
            })}
        </div>

    <div className='bottom-row-select_coach_aisle'>
    {arrSelectThird.botSeatAisle.map((el) => {
      return (
       <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`select_coach-seat-item_aside ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
      )
    })}
  </div>

 </div>

          
          
  )
})

// купе

const TrainButtonSecond = (( {arrSelectSecond}) => {
  const [id, setId]= React.useState();
  //  console.log(ticket, '<=ticket')
  const dispatch = useDispatch();
  // const [itemTicket, setItemTicket] = React.useState([]);
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const [activeTicket, setActiveTicket] = React.useState('seat-not-have');
  const ticket = useSelector( (state) => state.slicePrice.ticket);
  const [item, setItem]= React.useState([]);

  // const addTicketEx = (el, id)=>{
  //   dispatch(addSeatInTicket(el))
  // }
  
  const addTicketEx = (el, elTar, id)=>{
    elTar.classList.toggle('seat-selected');
    console.log(elTar, el, id)
    if(el){
      setItem([...el])
      console.log(el, item, 'добавление')
      dispatch(setTicket(el))
    }
  }

  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='top-row-select_coach'>
              {arrSelectSecond.topWindow.map((el, id) => {
                // console.log(ticketTrue, el, '<=ticketTrue1')
                return ( 
                <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
        </div>
  
        <div className='bottom-row-select_coach'>
            {arrSelectSecond.topAisle.map((el) => {
            //  console.log(ticketTrue, '<=ticketTrue2')select_coach-seat-item_aisle-noactive
              return (
              <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`select_coach-seat-item_aisle-noactive ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
              )
            })}
        </div>

    

 </div>

          
          
  )
})

// люкс
const TrainButtonFirst = (( {arrSelectSecond}) => {
  // const [ticket, setTicket]= React.useState();
  //  console.log(ticket, '<=ticket')
  const dispatch = useDispatch();
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const [activeTicket, setActiveTicket] = React.useState('seat-not-have');
  const ticket = useSelector( (state) => state.slicePrice.ticket);
  const [item, setItem]= React.useState([]);

  
  const addTicketEx = (el, elTar)=>{
    elTar.classList.toggle('seat-selected');
    console.log(elTar, el)
    if(el){
      setItem([...el])
      console.log(el, item, 'добавление')
      dispatch(setTicket(el))
    }
  }


  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='lux-row-select_coach'>
              {arrSelectSecond.luxSeats.map((el) => {
                // console.log(ticketTrue, el, '<=ticketTrue1')
                return ( 
                <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target)} className={`select_coach-seat-item-lux ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
        </div>
  
      

    

 </div>

          
          
  )
})

const TrainButtonForth = (({ arrSelectThird}) => {
  const dispatch = useDispatch();
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const [activeTicket, setActiveTicket] = React.useState('seat-not-have');
  const ticket = useSelector( (state) => state.slicePrice.ticket);
  React.useEffect(() =>{
    
    if(ticket > 0){
      setActiveTicket('seat-have')
    }

  },[ticket])
  const [item, setItem]= React.useState([]);

  
  const addTicketEx = (el, elTar, id)=>{
    elTar.classList.toggle('seat-selected');
    console.log(elTar, el, id)
    if(el){
      setItem([...el])
      console.log(el, item, 'добавление')
      dispatch(setTicket(el))
    }
  }

// React.useEffect(() =>{
  
//   console.log(items, ticket, 'ticket')
// },[ticket])



  return(
    <div className='forth-select_coach'>
          <div className='top-select_coach'>
            <div className='top-row-select'>
              {arrSelectThird.topWindow.map((el, id) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target)} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
            <div className='top-row-select'>
              {arrSelectThird.topAisle.map((el, id) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
          </div>

          <div className='bottom-select_coach'>
            <div className='top-row-select-top'>
              {arrSelectThird.botAisle.map((el, id) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`seat-win-bottom ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
            <div className='top-row-select-bottom'>
              {arrSelectThird.botWindow.map((el, id) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, e.target, id, el)} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
          </div>
        </div>
  )
})

  
  

  export {TrainButtonSecond,TrainButtonThird, TrainButtonForth, TrainButtonFirst}