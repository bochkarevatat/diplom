import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../../components/CustomLink';

import "./passengers.css"

const Passengers =()=>{
    const { user, departure } = useSelector( (state) => state.orderPassenger);
    const objTicket = useSelector( (state) => state.slicePrice.objTicket);
console.log(user)
    return (
      <>
    <div className='order-passengers'>
        <h4 className='order-passenger-title'>Пассажиры</h4>
        <div className='order-passenger-container'>
          <div className='passengers-container-list'>
            {departure.seats.map((el, i) =>
              <div className={`passengers-container-item${i === departure.seats.length - 1 ? '' : '-border'}`} key={i}>
                <div className='passenger-container-avatar'>
                  <span className='passenger-container-img'></span>
                  <p className='passenger-container-ages'>{el.person_info.is_adult ? 'Взрослый' : 'Ребенок'}</p>
                </div>
                <div className='passenger-container-data'>
                  <p className='passenger-container-name'>{`${el.person_info.last_name} ${el.person_info.first_name} ${el.person_info.patronymic}`}</p>
                  <p className='passenger-container-gender'>{`Пол ${el.person_info.gender ? 'мужской' : 'женский'}`}</p>
                  <p className='passenger-container-birth'>{`Дата рождения ${el.person_info.birthday}`}</p>
                  <p className='passenger-container-docs'>{`${el.person_info.document_type} ${el.person_info.document_data}`}</p>
                </div>
              </div>
            )}
          </div>
          <div className='passenger-container-change'>
            <div className='passenger-container-total'>
              <p>Всего</p>
              <div className='passenger-container-price'>
                <p>{objTicket.totalPrice}</p>
                <span className='details-total-sign'></span>
              </div>
            </div>
            <CustomLink className='' to="/ordertickets">
                <button className='passenger-container-btn'>Изменить</button>
            </CustomLink>
            
          </div>
        </div>


      </div>

       <div className='order-payment'>
     <p className='order-payment-title'>Способ оплаты</p>
     <div className='order-payment-method'>
      <p className='order-payment-text'>{user.payment_method}</p>
      <CustomLink className='order-payment-btn' to="/pay">
         <button className='order-payment-btn' type='button'>Изменить</button>
       </CustomLink>
    </div>
    </div>

     <div>
      <CustomLink className='' to="/succesfull">
           <button className='order-btn' type='button'>подтвердить</button>
      </CustomLink>
      </div>


      </>

    )
}

export default Passengers;