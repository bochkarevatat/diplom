import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../components/CustomLink';
import './OrderTickets.css';
import SidebarOrderTicket from './orderTickets/SidebarOrderTicket';
import ProgressLine from '../components/ProgressLine'
import {currentStepTwo} from '../redux/sliceProgressLine';
import ItemOrderTicket from './orderTickets/ItemOrderTicket';


const OrderTickets = () =>{
const trainSelection = useSelector( (state) => state.trainSlice.trainSelection);
const stepTwo = useSelector( (state) => state.sliceProgressLine.stepTwo);
const objTicket = useSelector( (state) => state.slicePrice.objTicket);
const[loading, setLoading] = React.useState(false);
const [addComponents, setAddComponents] = React.useState([]);
const [FromDate, setFromDate] = React.useState('16.05.2024');
const [ToDate, setToDate] = React.useState('16.05.2024');
const [amountPassengers, setAmountPassengers] = React.useState(objTicket.numberOld + objTicket.numberChild);
const dispatch = useDispatch();
console.log(trainSelection, "ordertickets")
const whereFromDate = useSelector( (state) => state.filter.fromDate);
    const whereToDate = useSelector( (state) => state.filter.toDate);
    // const FromDate = whereFromDate.toLocaleDateString("de-DE");
    // const ToDate = whereToDate.toLocaleDateString("de-DE")
const addPassenger =()=> {
    // console.log(amountPassengers, 'addComponents')

    
    if (amountPassengers >= 1) {
      setAmountPassengers((prev) => prev -= 1);
      setAddComponents([...addComponents, 1]);
      console.log(addComponents, amountPassengers, objTicket, 'addComponents')
    }
  }

    React.useEffect(() =>{
        setLoading(true)

        const Debounce = setTimeout(() => {
            dispatch(currentStepTwo(true))
            setFromDate(whereFromDate.toLocaleDateString("de-DE"))
            setToDate(whereToDate.toLocaleDateString("de-DE"))
            console.log("ProgressLine=>", stepTwo)
            setLoading(false)
          }, 500);
          return () => clearTimeout(Debounce);
    }, [])

   
return(
    <>
    <section className="reserch-progress">
        <ProgressLine stepTwo={true}/>
    </section>
   
            <div className='select-order-ticket'>
               { trainSelection.length !== 0 ?
            <div>
                 <SidebarOrderTicket train={trainSelection} />
            </div>:
           
            <CustomLink className='' to="/">
                <button className='search-butn'>не загрузилось</button>
            </CustomLink>
                   
    }
        <div>

        <ItemOrderTicket num={1} agesPassengers={2} addPassenger={addPassenger}/>
        <div className='add-passengers' onClick={addPassenger}>
            <h4 className='add-passenger-title'>Добавить пассажира</h4>
            <span className='add-passenger-img'></span>
         </div>
         <CustomLink className='' to="/pay">
            <button className='pay-btn'>далее</button>
        </CustomLink>
        </div>
        

         </div>
       
        </>
)
}



export {OrderTickets}