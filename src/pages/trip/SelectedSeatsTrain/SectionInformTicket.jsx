import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './SectionInformTicket.css';




const SectionInformTicket = ()=>{
    const trainCoach = useSelector( (state) => state.slicePrice.trainCoach);
    const seatsType = useSelector( (state) => state.slicePrice.seatsType);

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
    
    console.log(amountSeats(seatsType, 'third'))
    




    console.log(seatsType)
    return(

        <section className="section-inform-ticket">
            <div className="inform-ticket_name">
                <span className="inform-ticket_name_coach">{trainCoach.name}</span>
                <span className="inform-ticket-coach">Вагон</span>
            </div>
            <div className="number-seats">
                <div className="number-seats-items">
                    <span className="number-seats-item">места</span>
                    <span className="number-seats-total">{trainCoach.available_seats}</span>
                </div>
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
            </div>
            <div className="inform-ticket-price">
                <div className="inform-ticket-header">стоимость</div>
                <div className="inform-ticket-price">
                    <div className="inform-ticket-price-top">
                        <span className="">{trainCoach.top_price}</span>
                        <img className="inform-ticket-price-top_ruble" src="img/rubleIcon.png" alt="рубль" />
                    </div>
                    <div className="inform-ticket-price-bottom">
                    <span className="">{trainCoach.bottom_price}</span>
                    <img className="inform-ticket-price-top_ruble" src="img/rubleIcon.png" alt="рубль" />
                    </div>
                    <div className="inform-ticket-price-side">
                    <span className="">{trainCoach.side_price}</span>
                    <img className="inform-ticket-price-top_ruble" src="img/rubleIcon.png" alt="рубль" />
                    </div>
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