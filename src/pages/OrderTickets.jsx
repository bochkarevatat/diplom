import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../components/CustomLink';
import './OrderTickets.css';
import SidebarOrderTicket from './orderTickets/SidebarOrderTicket';
import ProgressLine from '../components/ProgressLine'
import {currentStepTwo} from '../redux/sliceProgressLine';
import ItemOrderTicket from './orderTickets/ItemOrderTicket';

const OrderTickets = (e) =>{
console.log(e)
const stepTwo = useSelector( (state) => state.sliceProgressLine.stepTwo);
const[loading, setLoading] = React.useState(false);
const dispatch = useDispatch();

    React.useEffect(() =>{
        setLoading(true)
        dispatch(currentStepTwo(true))
        console.log("ProgressLine=>", stepTwo)
        setLoading(false)
    }, [])

return(
    <>
    <section className="reserch-progress"><ProgressLine stepTwo={true}/></section>
        <div className='select-order-ticket'>
        <SidebarOrderTicket />
        <div>
        <ItemOrderTicket num={2} agesPassengers={2}/>
      
        <CustomLink className='' to="/pay">
                            <button className='pay-btn'>далее</button>
                          </CustomLink>
        </div>
        </div>
        
        </>
)
}



export {OrderTickets}