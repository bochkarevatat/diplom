import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import './ResultReserchTrain.css';

import {filterTrain, setSort, setSearchValueTo,} from '../../redux/slices/FilterTrainSlice';
// import {setIndex, setTrains} from "../../redux/slices/trainSlice";
// import TicketSeats from './ResultReserchTrainItems/TicketSeats'
import Sort from './components/Sort';
import CartsTest from './ResultReserchTrainItems/CartsTest'



const filteredTowns = (searchText, listOfCarts) => {
  // if (!searchText) {
  //   return listOfCars;
  // }
  
  return listOfCarts.filter(({ departure }) =>
  departure.from.city.name.toLowerCase().includes(searchText.toLowerCase())
  
  );
  
}

const filteredTownsTo = (searchText, listOfCartsTo) => {
  
  return listOfCartsTo.filter(({ departure }) =>
  departure.to.city.name.toLowerCase().includes(searchText.toLowerCase())
  
  );
  
}

const ResultReserchTrain = () =>{
  const filterTrainFrom = useSelector( (state) => state.filter.categoryCityFrom);
  const filterTrainTo = useSelector( (state) => state.filter.categoryCityTo);
  
 
  const  sortType = useSelector( (state) => state.filter.sort.sortProperty);

  const [itemsResultReserchTrain, setResultReserchTrain] = React.useState([]);

  console.log('sortType', sortType, filterTrainFrom)
  const dispatch = useDispatch();




// Пробую наладить поиск по инпуту, тест, начало

const getitemsResultReserchTrain = () =>{
  fetch(`https://students.netoservices.ru/fe-diplom/routes/last`)
    .then((res) => {return res.json()}).
    then(data => {
      setResultReserchTrain(data)
    })
}

React.useEffect(() =>{
  getitemsResultReserchTrain()
}, [])



const data = itemsResultReserchTrain;
 
console.log(data, filterTrainFrom)
// const [valueReserchTrain, setValueReserchTrain] = React.useState(data);
const [cityListTo, setCityListTo] = React.useState([]);
const [cityList, setCityList] = React.useState([]);

React.useEffect(() => {
  const Debounce = setTimeout(() => {
    const filteredCity = filteredTowns(filterTrainFrom, data);
    console.log('filteredCity =>', filteredCity)
    setCityListTo(filteredCity);
  }, 300);

  return () => clearTimeout(Debounce);
}, [filterTrainFrom]);

React.useEffect(() => {
  const Debounce = setTimeout(() => {
    const filteredCityTo = filteredTownsTo(filterTrainTo, cityListTo);
    console.log('filteredCityTo =>',filteredCityTo)
    setCityList(filteredCityTo);
  }, 300);

  return () => clearTimeout(Debounce);
}, [filterTrainTo]);


// console.log(cityList, valueReserchTrain)
  // Пробую наладить поиск по инпуту, тест, конец
  

  const objectLength = Object.keys(cityList).length;

  // const clicConsole = ()=>{
  //   console.log("btn")
  // }
  const amounts = [5, 10, 20];


 
    return (
        <div className='train-route'>

          
            <div className='train-route-header'>
                <div className='train-route-header_left'>

                <span className='train-route-serch'>найдено <span>{objectLength}</span></span>
                </div>
                <div className='train-route-header_right'>
                <Sort value={sortType}/>
             
                
                 <div className='sort-amount'>
                  <span className=''>показывать по:</span>

                 {/* {amounts.map((amount) => (

                  <button className='sort-amount-item'
                
                  onClick={clicConsole}>
                    
                         {amount}
                  </button>
                  
                    
                  ))}  */}


                  </div> 

                </div>
            
            </div>
            
        <CartsTest cityList={cityList}/>
        {/* <CartsTest cityList={console.log('cityList')}/> */}
           
          
      



        {/* <div className='train-tickets'>
          <div className='train-tickets-options'>
            {train.map((el) =>
              <TrainRouteSeats
                name={el.name}
                seats={el.seats}
                price={el.price}
                seatPrice={el.seatPrice}
                key={el.name} />
            )}
  
          </div>
  
          <div className='train-facilities'>
            <span className={`${route.departure.have_wifi ? 'facilities-wifi-have' : 'train-facilities-wifi'}`}></span>
            <span className={`${route.departure.is_express ? 'facilities-express-have' : 'train-facilities-express'}`}></span>
            <span className={`${route.departure.have_air_conditioning ? 'facilities-coffee-have' : 'train-facilities-coffee'}`}></span>
          </div>
  
          {btnText !== 'Изменить' ?
            <button type='button' className='train-choice-btn' onClick={getCoaches}>{btnText}</button> :
            <button type='button' className='order-route-btn' onClick={backOrder}>{btnText}</button>}
        </div> */}
      </div>



       


    )
}

export default ResultReserchTrain;