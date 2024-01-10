import icons6 from './icons/icons6.svg';
import icons5 from './icons/icons5.svg';
import icons4 from './icons/icons4.svg';
import './HowWorks.css';


function HowToWorks() {
    return (
      <div className='how-to-works'>
        <div className="how-to-works__container">
            <div className='how-to-works__header'>
              <h2 className='how-to-works__title'>Как это работает</h2>
              <button type='button' className='how-to-works__link-more'>Узнать больше</button>
            </div>
            
            <div className="how-to-works__content">
              <div className="how-to-works__content-item">
                <div className="how-to-works__content-item-icon">
                  <img src={icons6} alt="" />
                </div>
                <div className="how-to-works__content-item-description">
                  Удобный заказ на сайте
                </div>
              </div>
              <div className="how-to-works__content-item">
                <div className="how-to-works__content-item-icon">
                  <img src={icons5} alt="" />
                </div>
                <div className="how-to-works__content-item-description">
                  Нет необходимости ехать в офис
                </div>
              </div>
              <div className="how-to-works__content-item">
                <div className="how-to-works__content-item-icon">
                  <img src={icons4} alt="" />
                </div>
                <div className="how-to-works__content-item-description">
                  Огромный выбор направлений
                </div>
              </div>
            </div>
            <img className='img-bg1' src="/src/pages/homepage/bg/bg-part3.PNG" alt="" />
          </div>
      </div>
    )
  }
  
  export default HowToWorks;