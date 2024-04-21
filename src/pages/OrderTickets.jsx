import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './OrderTickets.css';
import SidebarOrderTicket from './orderTickets/SidebarOrderTicket';
import ProgressLine from '../components/ProgressLine'
import {currentStepTwo} from '../redux/sliceProgressLine';


const OrderTickets = (e) =>{
console.log(e)
const stepTwo = useSelector( (state) => state.sliceProgressLine.stepThree);
const[loading, setLoading] = React.useState(false);
const dispatch = useDispatch();

    React.useEffect(() =>{
        setLoading(true)
        dispatch(currentStepTwo(true))
        console.log("ProgressLine=>", stepTwo)
        setLoading(false)
    }, [loading])

return(
    <>
    <section className="reserch-progress"><ProgressLine/></section>
        <div className='select-order-ticket'>
        <SidebarOrderTicket />
        </div>
        </>
)
}



export {OrderTickets}