import { CustomLink } from './CustomLink';
import './components-style/components-style.css';

const ChoiceOfDirection = () => {

    const cityes = ['Moskow', 'Votkinsk', 'Uren', 'Kirov', 'Kazan'];
    return (
        <div className="">
            <div className="main-background header__bg">
        <div className="container-header">
        {/* <div className="header__col">
          <h2 className="header__slogan">
            <span className="header__slogan_thin">Вся жизнь -</span>
            <br />
            <span className="header__slogan_bold">путешествие!</span>
          </h2>
        </div> */}


        <div className="">
          <form className="header__form search-form" action="">
            <div className="search-form__row">
              <span className="search-form__hint">Направление</span>
              <div className="search-form__inputs">
                
                <input type="search" list="cities" className="search-form__input1" name="lacation-from" placeholder="Откуда" />
                
                <button type="button" className="search-form__btn">
                    <div className="search-form__direction-change"></div>
                </button>
                <input type="text" list="cities" className="search-form__input1" name="lacation-from" placeholder="Куда" />
                <datalist id="cities">
                  {cityes.map((city) => <option key={city} value={city}>{city}</option>)}
                </datalist>
              </div>
            </div>
            <div className="search-form__row">
              <span className="search-form__hint">Дата</span>
              <div className="search-form__inputs">
                <input type="date" className="search-form__input2" name="lacation-from" />
                <span className="search-span"></span>
                <input type="date" className="search-form__input2" name="lacation-from" />
              </div>
            </div>
            <div className="search-form__row">
            <CustomLink to="/about"><button className="search-form__button-submit" type='button'>Найти билеты</button></CustomLink>
              
            </div>
          </form>
        </div>
        </div>
        </div>
       
      
        </div>

        

    )
}

export {ChoiceOfDirection}
