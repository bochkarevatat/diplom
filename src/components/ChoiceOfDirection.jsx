import React from 'react';
import { CustomLink } from './CustomLink';
import { useSelector, useDispatch} from 'react-redux';


import {setSearchValueTo, setSearchValueFrom, setDateFrom, setDateTo, setIdFrom, setIdTo} from '../redux/slices/FilterTrainSlice';
import './components-style/components-style.css';
// import cityes from '../russia.json'

const ChoiceOfDirection = () => {

  const [ bg, setBg] = React.useState(false)

  const [itemslastRout, setitemslastRout] = React.useState([]);
  const [arrCityes, setArrCityes] = React.useState([]);
  
  
  

  const dispatch = useDispatch();
  
  const categoryCityTo = useSelector((state) => state.filter.categoryCityTo)
  const categoryCityFrom = useSelector((state) => state.filter.categoryCityFrom)
  const fromDate = useSelector((state) => state.filter.fromDate)
  const toDate = useSelector((state) => state.filter.toDate)
  const idCityFrom = useSelector((state) => state.filter.idCityFrom)
  const idCityTo = useSelector((state) => state.filter.idCityTo)

  const inputRef = React.useRef(null);
  const inputRefSecond = React.useRef(null);
  const inputRefDateFrom = React.useRef(null);
  const inputRefDateTo = React.useRef(null);
  const [isSent, setIsSent] = React.useState(false);




  const onClickDate = (obj ) => {
    dispatch(setSearchValueFrom(obj));
    inputRef.current?.focus();
    // console.log( arrCityes, '<=obj') 
   
    
  };

  const onClickDateFrom = (obj, arr) => {
    dispatch(setSearchValueTo(obj));
    inputRefSecond.current?.focus();
   
  };
 
  
  

  React.useEffect(() =>{
    
  fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${categoryCityTo}`)
      .then((res) => {return res.json()}).
      then(arr => {
        setArrCityes(arr)  
      }) 
  },[categoryCityTo])

  // console.log('arrCityes =>', arrCityes)
  React.useEffect(()=> {
    const Debounce = setTimeout(() => {
      if(itemslastRout){
        dispatch(setIdTo(arrCityes[0]._id));
        console.log('arrCityes =>', idCityTo)
      }
    }, 1000);
  
    return () => clearTimeout(Debounce);
    
  }, [arrCityes, idCityTo]);
  

   

  React.useEffect(() =>{
    fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${categoryCityFrom}`).then((res) => {return res.json()}).
    then(arr => {
      setitemslastRout(arr)
      
    })
  }, [categoryCityFrom])
 

  React.useEffect(()=> {
    const Debounce = setTimeout(() => {
      if(itemslastRout){
        dispatch(setIdFrom(itemslastRout[0]._id));
        console.log('itemslastRout =>', idCityFrom)
      }
    }, 1000);
  
    return () => clearTimeout(Debounce);
    
  }, [itemslastRout, idCityFrom]);
  
  // const onClickReplacement = () =>{
  //     if(inputRef == categoryCityFrom ){
  //       value=categoryCityFrom
  //     }
  //     else{

  //     }
  // }


  const onClickTimeFrom = (obj) => {
    dispatch(setDateFrom(obj));
    inputRefDateFrom.current?.focus();   
  };
  const onClickTimeTo = (obj) => {
    dispatch(setDateTo(obj));
    inputRefDateTo.current?.focus();   
  };
  
  // console.log('inputRefDateTo.current?', inputRef.current)
  
  

// console.log('arrCityes =>', arrCityes)
// console.log('arrCityes =>', arrCityes[0])

  // React.useEffect(()=> {
  //   if(name === consts.depCity && departureCity){
  //     setInputValue(departureCity.name);
  //   }
  //   if(name === consts.arrCity && arrivalCity){
  //     setInputValue(arrivalCity.name);
  //   }
  // }, [arrivalCity, departureCity, name]);

  // React.useEffect(() =>{
  //   fetch("https://students.netoservices.ru/fe-diplom/routes/last").then((res) => {return res.json()}).
  //   then(arr => {
  //     setitemslastRout(arr)
      
  //   })
  // }, [])
    
  
  // const idInputValue = arrCityes[0]._id

  // console.log('idInputValue', idInputValue, 'categoryCityFrom==>', categoryCityFrom);
  // const onClickClear = (obj) => {
  //   dispatch(setSearchValueFrom(obj));
  //   inputRef.current?.focus();   
  // };
  
    
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



            <form 
            className= {`${bg ? 'header__form' : 'search-form'}`}>
              <div className="search-form__row">
              <span className="search-form__hint">Направление</span>
              <div className="search-form__inputs">
                <input 
                ref={inputRef}
                value={categoryCityFrom}
                onChange={(ev) => onClickDate (ev.target.value)} type="text" list="cities"
                 className="search-form__input1" name="lacation-from" placeholder="Откуда" />
                
                <button onClick={() => console.log("replace")} type="button" className="search-form__btn">
                    <div className={`${bg ? 'search-form__direction' : 'search-form__direction-change'}`} ></div>
                </button>

                <input 
                ref={inputRefSecond}
                value={categoryCityTo}
                onChange={(ev) => onClickDateFrom(ev.target.value)}
                type="text" list="citiesTo"
                className="search-form__input1"
                name="lacation-to"
                placeholder="Куда" />

                <datalist id="cities"> 
                 {/* {itemslastRout.map((el) => <option key={el.departure.to.city.name}>{el.departure.to.city.name}</option>)} */}
                
                {itemslastRout.map((el) => <option key={el.name}>{el.name}</option>)} 
                </datalist>
                <datalist id="citiesTo"> 
                {arrCityes.map((el) => <option key={el.name}>{el.name}</option>)} 
                  {/* {itemslastRout.map((el) => <option key={el.departure.to.city.name}>{el.departure.to.city.name}</option>)} */}
                </datalist>
              </div>

            </div>



            <div className="search-form__row">
              <span className="search-form__hint date">Дата</span>
              <div className="search-form__inputs">
                <input ref={inputRefDateFrom}
                value={fromDate}
                onChange={(ev) => onClickTimeFrom(ev.target.value)}
                type="date" className="search-form__input2" name="lacation-from" placeholder="ДД/ММ/ГГ"/>
                <span className="search-span"></span>
                <input type="date" className="search-form__input2" name="lacation-from"
                ref={inputRefDateTo}
                value={toDate}
                onChange={(ev) => onClickTimeTo(ev.target.value)}
                />
              </div>
            </div>

            <div className="search-form__button">
            {/* <button onClick={() => setBg(true)} className="search-form__button-submit" type='button'>Найти билеты</button> */}
            <CustomLink to="/about">
              <button onClick={() => setBg(true)} className="search-form__button-submit" type='submit'>Найти билеты</button>
               {/* <button onClick={() => onClickDate()} className="search-form__button-submit" type='button'>Найти билеты</button> */}
              </CustomLink>
              
            </div>
          </form>
          </div>


        </div>
       
      
        </div>

        

    )
}

export {ChoiceOfDirection}
