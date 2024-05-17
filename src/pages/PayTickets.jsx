import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../components/CustomLink';
import SidebarOrderTicket from './orderTickets/SidebarOrderTicket';
import ProgressLine from '../components/ProgressLine'
import {currentStepThree} from '../redux/sliceProgressLine';
import PayTicketsRight from '../pages/payTickets/PayTicketsRight'
import './PayTickets.css';


const PayTickets = ()=> {
    const trainSelection = useSelector( (state) => state.trainSlice.trainSelection);
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
        { trainSelection.length !== 0 ?
            <div>
                 <SidebarOrderTicket train={trainSelection} />
            </div>:
           
            <CustomLink className='' to="/">
                <button className='search-butn'>не загрузилось</button>
            </CustomLink>
                   
            }
        </div>
      
        <div className="pay-section">
        <PayTicketsRight />
        </div>


        </div>
        
    </>
)

}

export {PayTickets}