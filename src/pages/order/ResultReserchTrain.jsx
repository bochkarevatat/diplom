import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import './ResultReserchTrain.css';
import dataTest from '../../russia.json'
import {filterTrain, setSort, setSearchValueTo,} from '../../redux/slices/FilterTrainSlice';
// import {setIndex, setTrains} from "../../redux/slices/trainSlice";
import TicketSeats from './ResultReserchTrainItems/TicketSeats'
import Sort from './components/Sort';
import Filter from './components/Filter'
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
  const idfilterTrainFrom = useSelector((state) => state.filter.idCityFrom)
  const idfilterTrainTo = useSelector((state) => state.filter.idCityTo)
  const fromDate = useSelector((state) => state.filter.fromDate)
  const toDate = useSelector((state) => state.filter.toDate)
 
  const callSetBtn = useSelector((state) => state.filter.callSetBtn)
  const sortType = useSelector( (state) => state.filter.sort.sortProperty);
  const filter = useSelector((state) => state.filter.filterN);
  const [itemsResultReserchTrain, setResultReserchTrain] = React.useState([]);
  const [data, setData] = React.useState([]);
  // const inputFromDate = Date.parse(fromDate)/1000;
  // const inputToDate = Date.parse(toDate)/1000;

  // console.log( fromDate, inputFromDate, inputToDate)
  // const dispatch = useDispatch();

console.log(sortType, '<= sortType')
// console.log(idfilterTrainFrom, idfilterTrainTo, '<= idfilterTrainFrom')
//&date_start=2024-03-20&start_departure_hour_from=0&start_departure_hour_to=24&start_arrival_hour_from=0&start_arrival_hour_to=24%20%20%20&price_from=0&sort=date&limit=5&offset=0&date_end=2024-03-28&end_departure_hour_from=0&end_departure_hour_to=24&end_arrival_hour_from=0&end_arrival_hour_to=24
// &date_start=${inputFromDate}&date_end=${inputToDate}
// Пробую наладить поиск по инпуту, тест, начало

React.useEffect(() =>{
  fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${idfilterTrainFrom}&to_city_id=${idfilterTrainTo}&date_start=${fromDate}&date_end=${toDate}&sort=${sortType}&limit=${filter}`)
    .then((res) => {return res.json()})
    .then(data => {
      setResultReserchTrain(data)
      
    })
  }, [callSetBtn, sortType, filter]) 
  // если я сюда ставлю data или как сейчас
  // то все работает, но  вводить вначале нужно дату и идет постоянное обновление

React.useEffect(() =>{

  const Debounce = setTimeout(() => {
    setData(itemsResultReserchTrain.items);
    // setData(dataTest.items);
  }, 1000);

  return () => clearTimeout(Debounce);
  
}, [itemsResultReserchTrain]) //itemsResultReserchTrain




 
console.log(data, 'data')




  const objectLength = Object.keys(data).length;

 
  const amounts = [5, 10, 20];


 
    return (
        <div className='train-route'>

          
            <div className='train-route-header'>
                <div className='train-route-header_left'>
                <span className='train-route-serch'>найдено <span>{objectLength}</span></span>
                </div>
                <div className='train-route-header_right'>
                <Sort value={sortType}/>
                <Filter/>
                </div>
            </div>
            
        <CartsTest cityList={data}/>
      </div>



       


    )
}

export default ResultReserchTrain;