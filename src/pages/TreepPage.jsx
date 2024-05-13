import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

// import {ChoiceOfDirection} from '../components/ChoiceOfDirection';
// import OrderSort from '../pages/order/OrderSort';
import SideBarSearch from './order/SideBarSearch';
import ResultReserchTrain from './order/ResultReserchTrain'
import ProgressLine from '../components/ProgressLine'
import PaginationItem from './order/components/PaginationItem';
import {currentStepOne} from '../redux/sliceProgressLine';
import "./TreepPage.css"

const TreepPage = (props) => {
    const stepOne = useSelector( (state) => state.sliceProgressLine.stepOne);
    // const stepTwo = useSelector( (state) => state.sliceProgressLine.stepTwo);
   const trainPerPage = useSelector((state) => state.trainSlice.trainPerPage);
    const totalTrain = useSelector((state) => state.trainSlice.totalTrain);
    
    const dispatch = useDispatch();

    React.useEffect(() =>{
        dispatch(currentStepOne(true))
        console.log("ProgressLine=>", stepOne)
    }, [])


   
    return (
        <>


        <section className="reserch-progress"><ProgressLine stepOne={true}/></section>
        
        <section className="reserchItems">
                    
          

            <div className='loadLine'><SideBarSearch /></div>
            <div className='right-sitebar'><ResultReserchTrain />
                <div className='pagination-elem'>
                    <PaginationItem
                trainPerPage={trainPerPage}
                totalTrain={totalTrain}
                /></div>
            </div>
            
       
        </section>
        </>
    )
}

export {TreepPage}
