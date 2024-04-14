import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './SectionInformTicket.css';
import { setTopPrice} from '../../../redux/slices/SlicePrice';



const SectionInformTicket = ()=>{
    const trainCoach = useSelector( (state) => state.slicePrice.trainCoach);
    const seatsType = useSelector( (state) => state.slicePrice.seatsType);
    const classType = useSelector( (state) => state.slicePrice.classType);
    console.log('classType =>', classType)
    const topPrice = useSelector( (state) => state.slicePrice.topPrice);
    const [trainCoachSlice, setTrainCoachSlice] = React.useState();
    const dispatch = useDispatch();
    const amountSeats = (amount, type) => {
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
      };
    
      React.useEffect(() =>{

      const Debounce = setTimeout(() => {
        dispatch(setTopPrice(trainCoach.top_price))
        setTrainCoachSlice(trainCoach.name.slice(-2))
      }, 1000)
      return () => clearTimeout(Debounce);
        
      },[trainCoach])


     
    // console.log(amountSeats(seatsType, 'third'))
   
    



    // console.log(seatsType)
    return(

        <section className="section-inform-ticket">
            <div className="inform-ticket_name">
                <span className="inform-ticket_name_coach">{trainCoachSlice}</span>
                <span className="inform-ticket-coach">Вагон</span>
            </div>
            <div className="number-seats">
                <div className="number-seats-items">
                    <span className="number-seats-item">места</span>
                    <span className="number-seats-total">{trainCoach.available_seats}</span>
                </div>
                {/* {classType === 'third' ?
              <div>
                <div className="inform-ticket_top-seats">
                <span className="top-seats_price-name"></span>
                <span className="top-seats_price">{`${amountSeats(seatsType, 'third').top}`}</span>
            </div> */}
            
            {/* </div>: */}
            {classType === 'third' ?
            <div>
              <div className="inform-ticket_top-seats">
                <span className="top-seats_price-name">верхние</span>
                <span className="top-seats_price">{`${amountSeats(seatsType, 'third').top}`}</span>
              </div>
              <div className="inform-ticket_top-seats">
                <span className="top-seats_price-name">нижние</span>
                <span className="top-seats_price">{`${amountSeats(seatsType, 'third').bottom}`}</span>
              </div>
        
              <div className="inform-ticket_top-seats">
                <span className="top-seats_price-name">боковые</span>
                <span className="top-seats_price">{`${amountSeats(seatsType, 'third').side}`}</span>
              </div>
           </div>: 
        classType === 'second' || classType === 'first' ?
        <div>
        <div className="inform-ticket_top-seats">
        <span className="top-seats_price-name">верхние</span>
        <span className="top-seats_price">{`${amountSeats(seatsType, 'third').top}`}</span>
    </div>
    <div className="inform-ticket_top-seats">
        <span className="top-seats_price-name">нижние</span>
        <span className="top-seats_price">{`${amountSeats(seatsType, 'third').bottom}`}</span>
    </div>
    
    </div>: 
         classType === 'fourth' ?
         <div>
         <div className="inform-ticket_top-seats">
         <span className="top-seats_price-name"></span>
         <span className="top-seats_price">{`${amountSeats(seatsType, 'third').top}`}</span>
        </div>
     
        </div>:null
            } 
            </div>
            <div className="inform-ticket-price">
                <div className="inform-ticket-header">стоимость</div>
                <div className="inform-ticket-price">
                {classType === 'first' || classType === 'second' || classType === 'third' || classType === 'fourth'?
                    <div>
                    <div className="inform-ticket-price-top">
                        <span className="">{topPrice}</span>
                        <img className="inform-ticket-price-top_ruble" src="img/rubleIcon.png" alt="рубль" />
                    </div>
                {/* // classType === 'first' || classType === 'second' || classType === 'third'? */}
                    <div className="inform-ticket-price-bottom">
                      <span className="">{trainCoach.bottom_price}</span>
                      <img className="inform-ticket-price-top_ruble" src="img/rubleIcon.png" alt="рубль" />
                      </div>
                    </div>:
                    classType === 'third' ?
                    <div className="inform-ticket-price-side">
                      <span className="">{trainCoach.side_price}</span>
                      <img className="inform-ticket-price-top_ruble" src="img/rubleIcon.png" alt="рубль" />
                    </div>:null
                    }
                </div>
            </div>
            <div className="inform-ticket-icon">
                <div className='inform-ticket-icon-header'>
                    <span className='icon-header_title'>обслуживание</span>
                    <span className='icon-header-name'>фпк</span>
                </div>
                <div className="inform-ticket-icon_items">
                    <div className={`${trainCoach.have_air_conditioning ? 'ticket-icon_items-active' : 'ticket-icon_items'}`}>
                        <img className="have_air_conditioning" src={`${trainCoach.have_air_conditioning ? 'img/condisionerYes.png' : 'img/condisionerNo.png'}`} alt="" />
                    </div>
                    <div className={`${trainCoach.have_wifi ? 'ticket-icon_items-active' : 'ticket-icon_items'}`}>
                        <img className="have_air_conditioning" src={`${trainCoach.have_wifi ? 'img/wi-fi.png' : 'img/wi-fiNo.png'}`} alt="" />
                    </div>
                    <div className={`${trainCoach.is_linens_included ? 'ticket-icon_items-active' : 'ticket-icon_items'}`}>
                        <img className="have_air_conditioning" src={`${trainCoach.is_linens_included ? 'img/sheetsYes.png' : 'img/sheetsNo.png'}`} alt="" />
                    </div>
                    <div className={`${trainCoach.have_coffee? 'ticket-icon_items-active' : 'ticket-icon_items'}`}>
                        <img className="have_air_conditioning" src={`${trainCoach.have_coffee ? 'img/capYes.png' : 'img/capNo.png'}`} alt="" />
                    </div>
                    {/* <div className="inform-ticket-icon_item"></div> */}
                    {/* <div className="inform-ticket-icon_item"></div> */}
                </div>
            </div>
        </section>
    )
}

export default SectionInformTicket;