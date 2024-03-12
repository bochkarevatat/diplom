import React from 'react';
import { CustomLink } from './CustomLink';
import { useSelector, useDispatch} from 'react-redux';


import {setSearchValueTo, setSearchValueFrom} from '../redux/slices/FilterTrainSlice';

import './components-style/components-style.css';
import cityes from '../russia.json'

const ChoiceOfDirection = () => {

  const [ bg, setBg] = React.useState(false)

  const [itemslastRout, setitemslastRout] = React.useState([]);
  
  
  const inputRefDate = React.useRef();

  const dispatch = useDispatch();
  
  const categoryCityTo = useSelector((state) => state.filter.categoryCityTo)
  const categoryCityFrom = useSelector((state) => state.filter.categoryCityFrom)

  const inputRef = React.useRef(null);
  const inputRefSecond = React.useRef(null);

  
  const onClickClear = (obj) => {
    dispatch(setSearchValueFrom(obj));
    inputRef.current?.focus();   
  };

  const onClickClearFrom = (obj) => {
    dispatch(setSearchValueTo(obj));
    inputRefSecond.current?.focus();   
  };

  console.log('categoryCityTo==>', categoryCityTo, 'categoryCityFrom==>', categoryCityFrom);


  // React.useEffect(()=> {
  //   if(name === consts.depCity && departureCity){
  //     setInputValue(departureCity.name);
  //   }
  //   if(name === consts.arrCity && arrivalCity){
  //     setInputValue(arrivalCity.name);
  //   }
  // }, [arrivalCity, departureCity, name]);

  React.useEffect(() =>{
    fetch("https://students.netoservices.ru/fe-diplom/routes/last").then((res) => {return res.json()}).
    then(arr => {
      setitemslastRout(arr)
      
    })
  }, [])
    
  
    
    return (
      <div className={`${bg ? 'container-reserch-hidden' : 'container-reserch'}`}>
        <div className={`${bg ? 'main-background-hidden' : 'show'}`}>
          <div className="header__col">
            <h2 className="header__slogan">
            <span className="header__slogan_thin">Вся жизнь -</span>
            <br />
            <span className="header__slogan_bold">путешествие!</span>
            </h2>
          </div>
        </div>

        <div className={`${bg ? 'main-background' : 'header__bg'}`}> 
          <div className={`${bg ? 'container-header-reserch' : 'container-header'}`}> 
            <form className= {`${bg ? 'header__form' : 'search-form'}`}>


              <div className="search-form__row">
              <span className="search-form__hint">Направление</span>

              <div className="search-form__inputs">
                <input 
                ref={inputRef}
                value={categoryCityFrom}
                onChange={(ev) => onClickClear(ev.target.value)} type="search" list="cities"
                 className="search-form__input1" name="lacation-from" placeholder="Откуда" />
                
                <button onClick={() => onClickClear('')} type="button" className="search-form__btn">
                    <div className={`${bg ? 'search-form__direction' : 'search-form__direction-change'}`} ></div>
                </button>

                <input 
                ref={inputRefSecond}
                value={categoryCityTo}
                onChange={(ev) => onClickClearFrom(ev.target.value)}
                type="text" list="cities"
                className="search-form__input1"
                name="lacation-from"
                placeholder="Куда" />

                <datalist id="cities"> 
                {cityes.map((el) => <option key={el.city}>{el.city}</option>)} 
                  {/* {itemslastRout.map((el) => <option key={el.departure.from.city.name}>{el.departure.from.city.name}</option>)} */}
                </datalist>
              </div>

            </div>



            <div className="search-form__row">
              <span className="search-form__hint date">Дата</span>
              <div className="search-form__inputs">
                <input ref={inputRefDate}  type="date" className="search-form__input2" name="lacation-from" placeholder="ДД/ММ/ГГ"/>
                <span className="search-span"></span>
                <input type="date" className="search-form__input2" name="lacation-from" />
              </div>
            </div>

            <div className="search-form__button">
            {/* <button onClick={() => setBg(true)} className="search-form__button-submit" type='button'>Найти билеты</button> */}
            <CustomLink to="/about">
              <button onClick={() => onClickClear()} className="search-form__button-submit" type='button'>Найти билеты</button>
              
              </CustomLink>
              
            </div>
          </form>
          </div>


        </div>
       
      
        </div>

        

    )
}

export {ChoiceOfDirection}
