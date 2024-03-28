import { Outlet, Link } from 'react-router-dom';
import React from 'react';
// import {ChoiceOfDirection} from '../components/ChoiceOfDirection';
// import OrderSort from '../pages/order/OrderSort';
import SideBarSearch from './order/SideBarSearch';
import ResultReserchTrain from './order/ResultReserchTrain'
import ProgressLine from '../components/ProgressLine'


const TreepPage = (props) => {

    

    return (
        <>


        <section className="reserch-progress"><ProgressLine/></section>
        <section className="reserchItems">
                    
          

            <div className='loadLine'><SideBarSearch /></div>
            <div className='riht-sitebar'><ResultReserchTrain /></div>
            
       
        </section>
        </>
    )
}

export {TreepPage}
