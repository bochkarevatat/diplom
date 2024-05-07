import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
// import axios from 'axios';

import './ResultReserchTrain.css';
import dataTest from '../../russia.json'
import {filterTrain, setSort, setSearchValueTo, setCurrentPage} from '../../redux/slices/FilterTrainSlice';
// import {setResultReserchTrain} from '../../redux/slices/TrainSlice';

// import {setIndex, setTrains} from "../../redux/slices/trainSlice";
import TicketSeats from './ResultReserchTrainItems/TicketSeats'
import Sort from './components/Sort';
import Filter from './components/Filter';
import CartsTest from './ResultReserchTrainItems/CartsTest';
import { clearStepAll, currentStepOne } from '../../redux/sliceProgressLine';

// const filteredTowns = (searchText, listOfCarts) => {
//   // if (!searchText) {
//   //   return listOfCars;
//   // }
  
//   return listOfCarts.filter(({ departure }) =>
//   departure.from.city.name.toLowerCase().includes(searchText.toLowerCase())
  
//   );
  
// }

// const filteredTownsTo = (searchText, listOfCartsTo) => {
  
//   return listOfCartsTo.filter(({ departure }) =>
//   departure.to.city.name.toLowerCase().includes(searchText.toLowerCase())
  
//   );
  
// }

const ResultReserchTrain = () =>{
  // const filterTrainFrom = useSelector( (state) => state.filter.categoryCityFrom);
  // const filterTrainTo = useSelector( (state) => state.filter.categoryCityTo);
  const idfilterTrainFrom = useSelector((state) => state.filter.idCityFrom)
  const idfilterTrainTo = useSelector((state) => state.filter.idCityTo)
  const fromDate = useSelector((state) => state.filter.fromDate)
  const toDate = useSelector((state) => state.filter.toDate)
  // const itemsResultReserchTrain = useSelector((state) => state.trainSlice.itemsResultReserchTrain)
 
  const callSetBtn = useSelector((state) => state.filter.callSetBtn)
  const sortType = useSelector( (state) => state.filter.sort.sortProperty);
  const currentPage = useSelector( (state) => state.filter.currentPage);
  const filter = useSelector((state) => state.filter.filterN);
  const [itemsResultReserchTrain, setResultReserchTrain] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [objectLength, setObjectLength] = React.useState(0);
  const[loading, setLoading] = React.useState(false);
  // const[currentPages, setCurrentPages] = React.useState(1);
  const dispatch = useDispatch();

  
  // const toDate = toDateI.toLocaleDateString('ru-RU', {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric"
  // })
  // console.log(toDate, toDateI, "767676")



React.useEffect(() =>{
  setLoading(true)
  fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${idfilterTrainFrom}&to_city_id=${idfilterTrainTo}&date_start=${fromDate}&date_end=${toDate}&sort=${sortType}&limit=${filter}`)
    .then((res) => {return res.json()})
    .then(data => {
      setResultReserchTrain(data)
      console.log(data)
      setLoading(false)
    })
  }, [callSetBtn, sortType, filter]) 
  

React.useEffect(() =>{

  const Debounce = setTimeout(() => {
    setData(itemsResultReserchTrain.items);
    // setData(dataTest.items);
  }, 1000);

  return () => clearTimeout(Debounce);
  
}, [itemsResultReserchTrain]) //itemsResultReserchTrain


React.useEffect(() =>{

  const Debounce = setTimeout(() => {
    setObjectLength(data.length);
  }, 1000);

  return () => clearTimeout(Debounce);
  
}, [data]) 

 
// const onChangePage = (page) => {
  //   dispatch(setCurrentPage(page));
  // };

  // React.useEffect(() => {
  //   if (!data) {
  //     dispatch(currentStepOne());
  //   }  
  // }, [dispatch, data]);




  // const objectLength = Object.keys(data).length;

 



 
    return (
        <div className='train-route'>
              {(!data || data?.length < 1)  && (
                      <div className="no-result">
                        Поезда не найдены. Выберите другую дату или маршрут
                      </div>
              )}
          
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