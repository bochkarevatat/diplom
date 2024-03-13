import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import SideBarSearch from './order/SideBarSearch';
// import ResultReserchTrain from './order/ResultReserchTrain'




const ChoiceOfLocation = () =>{

    return (

        <div className="reserchItems">
      
           

            <div className='loadLine'><SideBarSearch /></div>
            
       
        </div>
    )
}

export { ChoiceOfLocation};