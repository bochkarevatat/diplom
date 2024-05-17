import React from 'react';


import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../components/CustomLink';
import ProgressLine from '../components/ProgressLine'
import SidebarOrderTicket from './orderTickets/SidebarOrderTicket';
import TrainCard from './checkTicket/trainCard'

const CheckTickets =()=>{
    const trainSelection = useSelector( (state) => state.trainSlice.trainSelection);

    return(
        <>
        <section className="reserch-progress">
            <ProgressLine stepFour={true}/></section>

            <div className="pay-section-left">
        { trainSelection.length !== 0 ?
            <div>
                 <SidebarOrderTicket train={trainSelection} />
            </div>:
           
            <CustomLink className='' to="/">
                <button className='search-butn'>не загрузилось</button>
            </CustomLink>
                   
            }
        </div>
            
            <div>
           < TrainCard/>
            </div>
        </>
    )
}

export {CheckTickets}