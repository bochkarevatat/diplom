import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import SidebarOrderTicket from './orderTickets/SidebarOrderTicket';
import ProgressLine from '../components/ProgressLine'
import {currentStepThree} from '../redux/sliceProgressLine';
import PayTicketsRight from '../pages/payTickets/PayTicketsRight'
import './PayTickets.css';


const PayTickets = ()=> {

    const stepThree = useSelector( (state) => state.sliceProgressLine.stepThree);
    const dispatch = useDispatch();


    React.useEffect(() =>{
        dispatch(currentStepThree(true))
        console.log("ProgressLine=>", stepThree)
        
    }, [])

            return(
                <>


        <section className="reserch-progress">
            <ProgressLine stepThree={true}/>
            </section>
        <div className='select-pay-ticket'>

        <div className="pay-section-left">
        <SidebarOrderTicket />
        </div>
      
        <div className="pay-section">
        <PayTicketsRight />
        </div>
        </div>
        
    </>
)

}

export {PayTickets}