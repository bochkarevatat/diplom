// import { FC } from 'react';
import AvatarImg from './avatars/avatar1.png';
import AvatarImg1 from './avatars/avatar2.png';


const ReviewCard = () => {
  return (
    <div className="feedbacks__list-item">
		<div className="feddback-card">
            <img src={AvatarImg} className="feddback-card__img"  alt="Екатерина Вальнова" />
            <div className='feddback-card-inner'>
                <h4 className="feddback-card__author">Екатерина Вальнова</h4>
                <p className="feddback-card__text">
                <span className="review-card__text_quote">“</span>Доброжелательные подсказки на всех этапах
                помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн
                билет впервые.<span className="review-card__text_quote">”</span>
                </p>
            </div>
        </div>
        <div className="feddback-card">
            <img src={AvatarImg1} className="feddback-card__img"  alt="Екатерина Вальнова" />
            <div className='feddback-card-inner'>
                <h4 className="feddback-card__author card__author">Евгений Стрыкало</h4>
                <p className="feddback-card__text">
                <span className="review-card__text_quote">“</span>СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.<span className="review-card__text_quote">”</span>
                </p>
            </div>
        </div>
	</div>
  );
};

export default ReviewCard;