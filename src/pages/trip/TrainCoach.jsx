import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './TrainCoach.css'
import { changeAmountTickets, changeNumberSeats, changePriceSeats, changeServiceLinens, changeServiceWifi, slicePriceState } from '../../redux/slices/SlicePrice';


const selectionFirstClass = [
  {
    left: 1,
    right: 2,
  },
  {
    left: 3,
    right: 4,
  },
  {
    left: 5,
    right: 6,
  },
  {
    left: 7,
    right: 8,
  },
  {
    left: 9,
    right: 10,
  },
  {
    left: 11,
    right: 12,
  },
  {
    left: 13,
    right: 14,
  },
  {
    left: 15,
    right: 16,
  },
];

const selectionThirdClass = [
  {
    top: [2, 4],
    bottom: [1, 3],
    side: [33, 34]
  },
  {
    top: [6, 8],
    bottom: [5, 7],
    side: [35, 36]
  },
  {
    top: [10, 12],
    bottom: [9, 11],
    side: [37, 38]
  },
  {
    top: [14, 16],
    bottom: [13, 15],
    side: [39, 40]
  },
  {
    top: [18, 20],
    bottom: [17, 19],
    side: [41, 42]
  },
  {
    top: [22, 24],
    bottom: [21, 23],
    side: [43, 44]
  },
  {
    top: [26, 28],
    bottom: [25, 27],
    side: [45, 46]
  },
  {
    top: [30, 32],
    bottom: [29, 31],
    side: [47, 48]
  },
];

const selectionFourthClass = {
  topWindow: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
  topAisle: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  botAisle: [34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
  botWindow: [33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 62]
};



function amountSeats(amount, type){
  let top = 0;
  let bottom = 0;
  let side = 0;
  let sum = 0;
  let other = 0;

  if (type === 'first') {
    for (const i of amount) {
      if (i.index % 2 === 0 && i.available) {
        bottom += 1;
      }
      if (i.index % 2 !== 0 && i.available) {
        top += 1;
      }
    }
    sum = top + bottom;
    other = 18 - sum;
  }

  if (type === 'second' || type === 'third') {
    for (const i of amount) {
      if (i.index > 32 && i.available) {
        side += 1;
      }
      if (i.index % 2 === 0 && i.index < 33 && i.available) {
        top += 1;
      }
      if (i.index % 2 !== 0 && i.index < 33 && i.available) {
        bottom += 1;
      }
    }
    sum = top + bottom + side;
    if (type === 'second') {
      other = 32 - sum;
    }

    if (type === 'third') {
      other = 48 - sum;
    }
  }


  if (type === 'fourth') {
    for (const i of amount) {
      if (i.index % 2 === 0 && i.index < 33 && i.available) {
        bottom += 1;
      } else if (i.index % 2 !== 0 && i.index > 32 && i.available) {
        bottom += 1;
      } else if (i.available) {
        top += 1;
      }
    }
    sum = top + bottom;
    other = 62 - sum;
  }

  return {
    top,
    bottom,
    side,
    sum,
    other
  };
}

function haveSeatsOrNot(numScheme, coach){
  let result = 'seat-not-have';
  coach.seats.map((e) => {
    if (e.index === numScheme) {
      if (e.available) {
        return result = 'seat-have';
      }
    }
    return null;
  });
  return result;
}



const TrainCoach = (classStyle, coach) => {

  const trainList = useSelector( (state) => state.trainSlice.trainSelection);
  const dispatch = useDispatch();

  const { firstClass, secondClass, thirdClass, fourthClass } = useSelector((state) => state.slicePrice);
  const [current, setCurrent] = React.useState({
    seatsAge: 0,
    seatsChild: 0,
    totalPrice: 0,
    amountTickets: 0
  });

  React.useEffect(() => {
    if (coach.coach.class_type === 'first') {
      setCurrent(firstClass);
    }
    if (coach.coach.class_type === 'second') {
      setCurrent(secondClass);
    }
    if (coach.coach.class_type === 'third') {
      setCurrent(thirdClass);
    }
    if (coach.coach.class_type === 'fourth') {
      setCurrent(fourthClass);
    }
  }, [firstClass, secondClass, thirdClass, fourthClass]);
  
  function choiceSeats(ev, price, seat, have) {
    if (ev.target.classList.contains('seat-selected')) {
      dispatch(changePriceSeats({
        classType: coach.coach.class_type,
        price: -Number(price)
      }))
      dispatch(changeAmountTickets({
        classType: coach.coach.class_type,
        amount: 1
      }));
      dispatch(changeNumberSeats({
        classType: coach.coach.class_type,
        seat: {
          number: Number(seat),
          idCoach: coach.coach._id
        }
      }));
      ev.target.classList.remove('seat-selected');
    } else {
      if (have === 'seat-have' && current.amountTickets !== 0) {
        dispatch(changePriceSeats({
          classType: coach.coach.class_type,
          price: Number(price)
        }));
        dispatch(changeAmountTickets({
          classType: coach.coach.class_type,
          amount: -1
        }));
        dispatch(changeNumberSeats({
          classType: coach.coach.class_type,
          seat: {
            number: Number(seat),
            idCoach: coach.coach._id
          }
        }));
        ev.target.classList.add('seat-selected');
      } else if (current.amountTickets === 0) {
        console.log("Укажите количество билетов и выберите места!")
        // dispatch(changeNotice({
        //   notice: true,
        //   text: 'Укажите количество билетов и выберите места!'
        // }));
      }
    }
  }

return (
    // <div className={classStyle}>
    //     <div className='coach-seats-info'>
    //     {coach.coach.class_type === 'first' ?
    //       <span className='seats-info-first'>
    //         {selectionFirstClass.map((el, i) =>
    //           <div className='scheme-seats-first' style={{ left: `${41 + 89.63 * (i + 1)}px` }} key={i}>
    //             <span className={`seat-class seat-left ${haveSeatsOrNot(el.left, coach)}`}
    //               onClick={(ev) => choiceSeats(ev, coach.coach.bottom_price, el.left, haveSeatsOrNot(el.left, coach))}>{el.left}</span>
    //             <span className={`seat-class seat-right ${haveSeatsOrNot(el.right, coach)}`}
    //               onClick={(ev) => choiceSeats(ev, coach.coach.top_price, el.right, haveSeatsOrNot(el.right, coach))}>{el.right}</span>
    //           </div>
    //         )}
    //       </span> :
    //       coach.coach.class_type === 'second' ?
    //         <span className='seats-info-second'>
    //           {selectionThirdClass.map((el, i) =>
    //             <div className='scheme-seats-second' style={{ left: `${41 + 89.63 * (i + 1)}px` }} key={i}>
    //               <span className={`seat-class seat-top-left ${haveSeatsOrNot(el.top[0], coach)}`}
    //                 onClick={(ev) => choiceSeats(ev, coach.coach.top_price, el.top[0], haveSeatsOrNot(el.top[0], coach))}>{el.top[0]}</span>
    //               <span className={`seat-class seat-bot-left ${haveSeatsOrNot(el.bottom[0], coach)}`}
    //                 onClick={(ev) => choiceSeats(ev, coach.coach.bottom_price, el.bottom[0], haveSeatsOrNot(el.bottom[0], coach))}>{el.bottom[0]}</span>
    //               <span className={`seat-class seat-top-right ${haveSeatsOrNot(el.top[1], coach)}`}
    //                 onClick={(ev) => choiceSeats(ev, coach.coach.top_price, el.top[1], haveSeatsOrNot(el.top[1], coach))}>{el.top[1]}</span>
    //               <span className={`seat-class seat-bot-right ${haveSeatsOrNot(el.bottom[1], coach)}`}
    //                 onClick={(ev) => choiceSeats(ev, coach.coach.bottom_price, el.bottom[1], haveSeatsOrNot(el.bottom[1], coach))}>{el.bottom[1]}</span>
    //             </div>
    //           )}
    //         </span> :
    //         coach.coach.class_type === 'third' ?
    //           <span className='seats-info-third'>
    //             {selectionThirdClass.map((el, i) =>
    //               <div className='scheme-seats-third' style={{ left: `${41 + 89.63 * (i + 1)}px` }} key={i}>
    //                 <span className={`seat-class seat-top-left ${haveSeatsOrNot(el.top[0], coach)}`}
    //                   onClick={(ev) => choiceSeats(ev, coach.coach.top_price, el.top[0], haveSeatsOrNot(el.top[0], coach))}>{el.top[0]}</span>
    //                 <span className={`seat-class seat-bot-left ${haveSeatsOrNot(el.bottom[0], coach)}`}
    //                   onClick={(ev) => choiceSeats(ev, coach.coach.bottom_price, el.bottom[0], haveSeatsOrNot(el.bottom[0], coach))}>{el.bottom[0]}</span>
    //                 <span className={`seat-class seat-side-left ${haveSeatsOrNot(el.side[0], coach)}`}
    //                   onClick={(ev) => choiceSeats(ev, coach.coach.side_price, el.side[0], haveSeatsOrNot(el.side[0], coach))}>{el.side[0]}</span>
    //                 <span className={`seat-class seat-top-right ${haveSeatsOrNot(el.top[1], coach)}`}
    //                   onClick={(ev) => choiceSeats(ev, coach.coach.top_price, el.top[1], haveSeatsOrNot(el.top[1], coach))}>{el.top[1]}</span>
    //                 <span className={`seat-class seat-bot-right ${haveSeatsOrNot(el.bottom[1], coach)}`}
    //                   onClick={(ev) => choiceSeats(ev, coach.coach.bottom_price, el.bottom[1], haveSeatsOrNot(el.bottom[1], coach))}>{el.bottom[1]}</span>
    //                 <span className={`seat-class seat-side-right ${haveSeatsOrNot(el.side[1], coach)}`}
    //                   onClick={(ev) => choiceSeats(ev, coach.coach.side_price, el.side[1], haveSeatsOrNot(el.side[1], coach))}>{el.side[1]}</span>
    //               </div>
    //             )}
    //           </span> :
    //           coach.coach.class_type === 'fourth' ?
    //             <span className='seats-info-fourth'>
    //               <div className='scheme-seats-fourth'>
    //                 {selectionFourthClass.topWindow.map((e, i) =>
    //                   <span className={`seat-class seat-win-top ${haveSeatsOrNot(e, coach)}`}
    //                     style={{ left: `${11.3 + 44.2 * (i)}px` }} key={i}
    //                     onClick={(ev) => choiceSeats(ev, coach.coach.top_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
    //                 )}
    //                 {selectionFourthClass.topAisle.map((e, i) =>
    //                   <span className={`seat-class seat-aisle-top ${haveSeatsOrNot(e, coach)}`}
    //                     style={{ left: `${11.3 + 44.2 * (i)}px` }} key={i}
    //                     onClick={(ev) => choiceSeats(ev, coach.coach.bottom_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
    //                 )}
    //                 {selectionFourthClass.botAisle.map((e, i) =>
    //                   <span className={`seat-class seat-aisle-bot ${haveSeatsOrNot(e, coach)}`}
    //                     style={{ left: `${55.3 + 44.2 * (i)}px` }} key={i}
    //                     onClick={(ev) => choiceSeats(ev, coach.coach.bottom_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
    //                 )}
    //                 {selectionFourthClass.botWindow.map((e, i) =>
    //                   <span className={`seat-class seat-win-bot ${haveSeatsOrNot(e, coach)}`}
    //                     style={{ left: `${11.3 + 44.2 * (i)}px` }} key={i}
    //                     onClick={(ev) => choiceSeats(ev, coach.coach.top_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
    //                 )}
    //               </div>
    //             </span> 
                
    //             : null
                
    //             }

    //   </div>
    // </div>

    <div className={classStyle}>
         <div className='coach-seats-info'></div>
    </div>
    
)
                    }


  export default TrainCoach          

{/* <span class="seats-info-second">
    <div class="scheme-seats-second" style="left: 130.63px;">
    <span class="seat-class seat-top-left seat-have">2</span>
    <span class="seat-class seat-bot-left seat-have">1</span>
    <span class="seat-class seat-top-right seat-have">4</span>
    <span class="seat-class seat-bot-right seat-have">3</span>
    </div>

    <div class="scheme-seats-second" style="left: 220.26px;">
        <span class="seat-class seat-top-left seat-have">6</span>
        <span class="seat-class seat-bot-left seat-have">5</span>
        <span class="seat-class seat-top-right seat-have">8</span>
        <span class="seat-class seat-bot-right seat-have">7</span>
    </div>
    <div class="scheme-seats-second" style="left: 309.89px;">
        
        <span class="seat-class seat-top-left seat-have">10</span>
        <span class="seat-class seat-bot-left seat-have">9</span>
        <span class="seat-class seat-top-right seat-have">12</span>
        <span class="seat-class seat-bot-right seat-have">11</span>
        </div>
        <div class="scheme-seats-second" style="left: 399.52px;">
            <span class="seat-class seat-top-left seat-have">14</span>
            <span class="seat-class seat-bot-left seat-have">13</span>
            <span class="seat-class seat-top-right seat-have">16</span>
            <span class="seat-class seat-bot-right seat-have">15</span>
            </div>
            <div class="scheme-seats-second" style="left: 489.15px;">
                <span class="seat-class seat-top-left seat-have">18</span>
                <span class="seat-class seat-bot-left seat-have">17</span>
                <span class="seat-class seat-top-right seat-have">20</span>
                <span class="seat-class seat-bot-right seat-have">19</span>
                </div>
                <div class="scheme-seats-second" style="left: 578.78px;">
                    <span class="seat-class seat-top-left seat-not-have">22</span>
                    <span class="seat-class seat-bot-left seat-have">21</span>
                    <span class="seat-class seat-top-right seat-not-have">24</span>
                    <span class="seat-class seat-bot-right seat-not-have">23</span>
                    </div>
                    <div class="scheme-seats-second" style="left: 668.41px;">
                        <span class="seat-class seat-top-left seat-not-have">26</span>
                        <span class="seat-class seat-bot-left seat-not-have">25</span>
                        <span class="seat-class seat-top-right seat-not-have">28</span
                        ><span class="seat-class seat-bot-right seat-not-have">27</span>
                        </div>
                        <div class="scheme-seats-second" style="left: 758.04px;">
                            <span class="seat-class seat-top-left seat-not-have">30</span>
                            <span class="seat-class seat-bot-left seat-not-have">29</span>
                            <span class="seat-class seat-top-right seat-not-have">32</span>
                            <span class="seat-class seat-bot-right seat-not-have">31</span>
            </div>
            </span> */}