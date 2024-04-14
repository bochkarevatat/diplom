import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './TrainButton.css'
import { setTicket} from '../../../redux/slices/SlicePrice';




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



const TrainButtonThird = (( {arrSelectThird}) => {
  const dispatch = useDispatch();
  const ticketTrue = useSelector( (state) => state.slicePrice.ticketTrue);
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  
  

  // console.log(ticket, 'ticket')
  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='top-row-select_coach'>
              {arrSelectThird.topWindow.map((el) => {
                return (
                <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
        </div>
  
        <div className='bottom-row-select_coach'>
            {arrSelectThird.topAisle.map((el) => {
              return (
              <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
              )
            })}
        </div>

    <div className='bottom-row-select_coach_aisle'>
    {arrSelectThird.botSeatAisle.map((el) => {
      return (
       <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`select_coach-seat-item_aside ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
      )
    })}
  </div>

 </div>

          
          
  )
})

const TrainButtonSecond = (( {arrSelectSecond}) => {
  // const [ticket, setTicket]= React.useState();
  //  console.log(ticket, '<=ticket')
  const dispatch = useDispatch();
  const seatsType = useSelector( (state) => state.slicePrice.seatsType);
  const [activeTicket, setActiveTicket] = React.useState('seat-not-have');
  const ticket = useSelector( (state) => state.slicePrice.ticket);
//   React.useEffect(() =>{
    
//     if(setTicket){
//       setActiveTicket('select-active-ticket')
//     }

//   },[ticket])
// console.log(activeTicket)


  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='top-row-select_coach'>
              {arrSelectSecond.topWindow.map((el) => {
                // console.log(ticketTrue, el, '<=ticketTrue1')
                return ( 
                <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`select_coach-seat-item ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
        </div>
  
        <div className='bottom-row-select_coach'>
            {arrSelectSecond.topAisle.map((el) => {
            //  console.log(ticketTrue, '<=ticketTrue2')select_coach-seat-item_aisle-noactive
              return (
              <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`select_coach-seat-item_aisle-noactive ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
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
//   React.useEffect(() =>{
    
//     if(setTicket){
//       setActiveTicket('select-active-ticket')
//     }

//   },[ticket])
// console.log(activeTicket)


  return(
    <div className='select_coach'>
        <div className='top-select_coach'>
            <div className='lux-row-select_coach'>
              {arrSelectSecond.luxSeats.map((el) => {
                // console.log(ticketTrue, el, '<=ticketTrue1')
                return ( 
                <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`select_coach-seat-item-lux ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
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
console.log(ticket)

  return(
    <div className='forth-select_coach'>
          <div className='top-select_coach'>
            <div className='top-row-select'>
              {arrSelectThird.topWindow.map((el) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
            <div className='top-row-select'>
              {arrSelectThird.topAisle.map((el) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
          </div>

          <div className='bottom-select_coach'>
            <div className='top-row-select-top'>
              {arrSelectThird.botAisle.map((el) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`seat-win-bottom ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
            <div className='top-row-select-bottom'>
              {arrSelectThird.botWindow.map((el) => {
                // console.log(el, '<=el')
                return (
                <button value={el} onClick={(e) => dispatch(setTicket(e.target.value))} className={`seat-win-top ${haveSeatsOrNot(el, seatsType)}`}>{el}</button>
                )
              })}
            </div>
          </div>
        </div>
  )
})

  
  

  export {TrainButtonSecond,TrainButtonThird, TrainButtonForth, TrainButtonFirst}