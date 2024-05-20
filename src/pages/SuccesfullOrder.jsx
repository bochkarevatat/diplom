import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Rate} from "antd";
import {StarOutlined} from "@ant-design/icons";
import Footer from './homepage/Footer';
import { CustomLink } from '../components/CustomLink';
import "./SuccesfullOrder.css"


const SuccesfullOrder =()=>{

    const objTicket = useSelector( (state) => state.slicePrice.objTicket);  
    const { user } = useSelector( (state) => state.orderPassenger);


    return (
        <>
        <div className='success-background'>
          <h2 className='success-title'>Благодарим Вас за заказ!</h2>
    
          <div className='success'>
    
            <div className='success-order'>
              <h4 className='suc-order-number'>№Заказа 285АА</h4>
              <div className='suc-price'>
                <p className='suc-price-text'>сумма</p>
                <div className='suc-price-number'>
                  <p>{objTicket.totalPriceAll}</p>
                  <span className='suc-price-sign'></span>
                </div>
              </div>
            </div>
    
            <div className='success-description'>
              <div className='suc-desc-email'>
                <div className='desc-email-img'></div>
                <p className='suc-desc-text'>билеты будут отправлены на ваш e-mail</p>
              </div>
    
              <div className='suc-desc-print'>
                <div className='desc-print-img'></div>
                <p className='suc-desc-text'>распечатайте и сохраняйте билеты до даты поездки</p>
              </div>
    
              <div className='suc-desc-present'>
                <div className='desc-present-img'></div>
                <p className='suc-desc-text'>предьявите распечатанные билеты при посадке</p>
              </div>
            </div>
    
            <div className='success-name'>
              <p className='suc-name-order'>{`${user.first_name} ${user.patronymic}`}</p>
              <p className='suc-name-text'>Ваш заказ успешно оформлен.<br /> В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
              <p className='suc-name-thx'>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
            </div>
    
            <div className='success-grade'>
              <div className='suc-grade'>
                <p className='suc-grade-text'>Оценить сервис</p>
                <div className='suc-grade-stars'>
                     <Rate character={<StarOutlined style={{fontSize:'36px'}}/>}/>
                </div>
                
                
              </div>
              <div className='success-btn-items'>
      <CustomLink className='' to="/">
      <button className='success-btn' type='button' >вернуться на главную</button>
         
      </CustomLink>
      </div>

             
            </div>
          </div>
        </div>
        <footer className="container-footer-succ">
            <Footer/>
        </footer>
</>
      );
}

export  {SuccesfullOrder}