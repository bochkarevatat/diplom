import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

// import {ChoiceOfDirection} from '../components/ChoiceOfDirection';
// import OrderSort from '../pages/order/OrderSort';
import SideBarSearch from './order/SideBarSearch';
import ResultReserchTrain from './order/ResultReserchTrain'
import ProgressLine from '../components/ProgressLine'
import PaginationItem from './order/components/PaginationItem'
import "./TreepPage.css"

const TreepPage = (props) => {

   const trainPerPage = useSelector((state) => state.trainSlice.trainPerPage);
    const totalTrain = useSelector((state) => state.trainSlice.totalTrain);

    console.log("treeppage=>", trainPerPage, totalTrain)
    return (
        <>


        <section className="reserch-progress"><ProgressLine/></section>
        <section className="reserchItems">
                    
          

            <div className='loadLine'><SideBarSearch /></div>
            <div className='right-sitebar'><ResultReserchTrain />
                <div className='pagination-elem'><PaginationItem
                trainPerPage={trainPerPage}
                totalTrain={totalTrain}
                /></div>
            </div>
            
       
        </section>
        </>
    )
}

export {TreepPage}
