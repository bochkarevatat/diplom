import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './TrainButton.css'
import { setTicket} from '../../../redux/slices/SlicePrice';
import {addSeatInTicket, clearTicket} from '../../../redux/slices/SliceTicket'



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

// function haveActiveOrNot(arr, el){
//   let resultActive = 'select_coach-seat-item';
//   arr.map((e) => {
//     if (e === el) {
//       console.log("работает условие?", e, el)
//       return resultActive = 'select_coach-seat-item_active';
      
//     }
//     console.log("not работает условие?", e, el)
//     return null;
//   });
//   return resultActive;
// }

const TrainButtonThird = (( {arrSelectThird}) => {
  const dispatch = useDispatch();
  const ticketTrue = useSelector( (state) => state.slicePrice.ticketTrue);
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const ticket = useSelector( (state) => state.slicePrice.ticket);
  const items = useSelector( (state) => state.sliceTicket.items);
  const id = useSelector( (state) => state.sliceTicket.idSeat);
  const [item, setItem]= React.useState({id:0,
    itemT:0,
  });
   // const [id, setId]= React.useState();
  // const [itemTicket, setItemTicket] = React.useState([]);
  
  const addTicketEx = (el, elTar, id, element)=>{
    // console.log(el, elTar, element, 'el')
    dispatch(setTicket(el))
    dispatch(addSeatInTicket(Number(el)))
    // здесь не работает, конфликт или так нельзя?
    elTar.classList.add('bebebe')
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
              <button value={el} onClick={(e) => addTicketEx(e.target.value, id)} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
              )
            })}
        </div>

    <div className='bottom-row-select_coach_aisle'>
    {arrSelectThird.botSeatAisle.map((el) => {
      return (
       <button value={el} onClick={(e) => addTicketEx(e.target.value, id)} className={`select_coach-seat-item_aside ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
      )
    })}
  </div>

 </div>

          
          
  )
})

const TrainButtonSecond = (( {arrSelectSecond}) => {
  const [id, setId]= React.useState();
  //  console.log(ticket, '<=ticket')
  const dispatch = useDispatch();
  // const [itemTicket, setItemTicket] = React.useState([]);
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const [activeTicket, setActiveTicket] = React.useState('seat-not-have');
  const ticket = useSelector( (state) => state.slicePrice.ticket);


  const addTicketEx = (el, id)=>{
   
    
    dispatch(addSeatInTicket(el))
  }
  
// console.log(ticket)


  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='top-row-select_coach'>
              {arrSelectSecond.topWindow.map((el, id) => {
                // console.log(ticketTrue, el, '<=ticketTrue1')
                return ( 
                <button value={el} onClick={(e) => addTicketEx(e.target.value, id)} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
        </div>
  
        <div className='bottom-row-select_coach'>
            {arrSelectSecond.topAisle.map((el) => {
            //  console.log(ticketTrue, '<=ticketTrue2')select_coach-seat-item_aisle-noactive
              return (
              <button value={el} onClick={(e) => dispatch(addTicketEx(e.target.value, id))} className={`select_coach-seat-item_aisle-noactive ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
              )
            })}
        </div>

    

 </div>

          
          
  )
})

const TrainButtonFirst = (( {arrSelectSecond}) => {
  // const [ticket, setTicket]= React.useState();
  //  console.log(ticket, '<=ticket')
  const dispatch = useDispatch();
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const [activeTicket, setActiveTicket] = React.useState('seat-not-have');
  const ticket = useSelector( (state) => state.slicePrice.ticket);
  const addTicketEx = (el, id)=>{
   
    dispatch(addSeatInTicket(el))
  }


  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='lux-row-select_coach'>
              {arrSelectSecond.luxSeats.map((el) => {
                // console.log(ticketTrue, el, '<=ticketTrue1')
                return ( 
                <button value={el} onClick={(e) => dispatch(addTicketEx(e.target.value, id))} className={`select_coach-seat-item-lux ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
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
  const addTicketEx = (el, id)=>{
   
    dispatch(addSeatInTicket(el))
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
                <button value={el} onClick={(e) => addTicketEx(e.target.value, id)} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
            <div className='top-row-select'>
              {arrSelectThird.topAisle.map((el, id) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, id)} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
          </div>

          <div className='bottom-select_coach'>
            <div className='top-row-select-top'>
              {arrSelectThird.botAisle.map((el, id) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, id)} className={`seat-win-bottom ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
            <div className='top-row-select-bottom'>
              {arrSelectThird.botWindow.map((el, id) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => addTicketEx(e.target.value, id)} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
          </div>
        </div>
  )
})

  
  

  export {TrainButtonSecond,TrainButtonThird, TrainButtonForth, TrainButtonFirst}