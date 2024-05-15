import React from 'react';


import { useSelector, useDispatch} from 'react-redux';
import ProgressLine from '../components/ProgressLine'
import SidebarOrderTicket from './orderTickets/SidebarOrderTicket';

const CheckTickets =()=>{

    return(
        <>
        <section className="reserch-progress">
            <ProgressLine stepFour={true}/></section>

            <div>
           {/* < SidebarOrderTicket/> */}
            </div>
            
            
        </>
    )
}

export {CheckTickets}