import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import './ResultReserchTrain.css';

import {filterTrain, setSort, setSearchValueTo,} from '../../redux/slices/FilterTrainSlice';
// import {setIndex, setTrains} from "../../redux/slices/trainSlice";
import TicketSeats from './ResultReserchTrainItems/TicketSeats'
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
  const idfilterTrainFrom = useSelector((state) => state.filter.idCityFrom)
  const idfilterTrainTo = useSelector((state) => state.filter.idCityTo)
  const fromDate = useSelector((state) => state.filter.fromDate)
  const toDate = useSelector((state) => state.filter.toDate)
 
  const  sortType = useSelector( (state) => state.filter.sort.sortProperty);

  const [itemsResultReserchTrain, setResultReserchTrain] = React.useState([]);
  const [data, setData] = React.useState([]);
  const inputFromDate = Date.parse(fromDate)/1000;
  const inputToDate = Date.parse(toDate)/1000;

  console.log( fromDate, inputFromDate, inputToDate)
  const dispatch = useDispatch();

  // function conversionDate(time){
  //   t
  // }

// console.log(idfilterTrainFrom, idfilterTrainTo, '<= idfilterTrainFrom')
//&date_start=2024-03-20&start_departure_hour_from=0&start_departure_hour_to=24&start_arrival_hour_from=0&start_arrival_hour_to=24%20%20%20&price_from=0&sort=date&limit=5&offset=0&date_end=2024-03-28&end_departure_hour_from=0&end_departure_hour_to=24&end_arrival_hour_from=0&end_arrival_hour_to=24
// &date_start=${inputFromDate}&date_end=${inputToDate}
// Пробую наладить поиск по инпуту, тест, начало

React.useEffect(() =>{
  fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${idfilterTrainFrom}&to_city_id=${idfilterTrainTo}&date_start=${fromDate}&date_end=${toDate}`)
    .then((res) => {return res.json()}).
    then(data => {
      setResultReserchTrain(data)
      // console.log(data, 'data')
    })
  }, [])

React.useEffect(() =>{

  const Debounce = setTimeout(() => {
    setData(itemsResultReserchTrain.items);
  }, 1000);

  return () => clearTimeout(Debounce);
  
}, [itemsResultReserchTrain])




 
console.log(data, 'data')


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
                 <div className='sort-amount'>
                  <span className=''>показывать по:</span>
                  </div> 
                </div>
            </div>
            
        <CartsTest cityList={data}/>
      </div>



       


    )
}

export default ResultReserchTrain;