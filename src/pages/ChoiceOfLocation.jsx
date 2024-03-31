import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import SideBarSearch from './order/SideBarSearch';
// import ResultReserchTrain from './order/ResultReserchTrain'
import ProgressLine from '../components/ProgressLine'
import {currentStepTwo} from '../redux/sliceProgressLine';
import SelectSeatTicket  from './trip/SelectSeatTicket'
import './ChoiceOfLocation.css'


const ChoiceOfLocation = () =>{
const stepTwo = useSelector( (state) => state.sliceProgressLine.stepTwo);
const dispatch = useDispatch();
const trainSelection = useSelector( (state) => state.trainSlice.trainSelection);
const [data, setData] = React.useState([]);
console.log("trainSelection", trainSelection)

    React.useEffect(() =>{
        const Debounce = setTimeout(() => {
            dispatch(currentStepTwo(true))
            setData(trainSelection)
            console.log("data=>", data)
          }, 1000);
        
          return () => clearTimeout(Debounce);
       
      
       
    }, [])

    return (
            <>
                <section  className="reserch-progress"><ProgressLine/></section>
                <div className="reserchItems">
      
           

                    <div className='loadLine'><SideBarSearch /></div>
                    <div className='right-sitebar'>
                        <h2 className='llocation-title'>ВЫБОР МЕСТА</h2>
                       
                        <div>
                        <SelectSeatTicket />

                        </div>
                        
                       
                    </div>
             
                   
            
       
                </div>

            </>
        
    )
}

export { ChoiceOfLocation};