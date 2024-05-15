import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { CustomLink } from '../components/CustomLink';
import { useSelector, useDispatch} from 'react-redux';
import SideBarSearch from './order/SideBarSearch';
import{ Blogpage} from '../pages/Blogpage'
// import ResultReserchTrain from './order/ResultReserchTrain'
import ProgressLine from '../components/ProgressLine'
import {currentStepTwo} from '../redux/sliceProgressLine';
import SelectSeatTicket  from './trip/SelectSeatTicket'
import './ChoiceOfLocation.css'
import sosItems from './trip/sosItems.json'


const ChoiceOfLocation = () =>{

const stepTwo = useSelector( (state) => state.sliceProgressLine.stepTwo);
const dispatch = useDispatch();
const trainSelection = useSelector( (state) => state.trainSlice.trainSelection);
const [data, setData] = React.useState([]);

const trainList = useSelector( (state) => state.trainSlice.trainSelection);
const [state, setState] = React.useState({
    data: null,
    loading: true, 
  });
//   console.log("trainList", trainList)
    React.useEffect(() =>{
        const Debounce = setTimeout(() => {
            dispatch(currentStepTwo(true))
            setData(trainSelection)
            console.log("data=>", data)
          }, 500);
        
          return () => clearTimeout(Debounce);
      
    }, [])
    // if(){

    // }

console.log("trainList", trainList)

    return (
            <>
                <section  className="reserch-progress"><ProgressLine/></section>
                <div className="reserchItems">
      
           

                    <div className='loadLine'>
                        <SideBarSearch />
                    </div> 
                     <div className='right-sitebar'>
                        <h2 className='llocation-title'>ВЫБОР МЕСТА</h2>
                      {/* все ломается от этого компонента SelectSeatTicket:  */}
                      {trainList.length !== 0?
                       <div>
                       <SelectSeatTicket train={trainList}/>
                       <CustomLink className='location-button' to="/ordertickets">
                            <button className='search-butn'>далее</button>
                        </CustomLink>

                   </div>:
                      
                      <div>
                      {/* <Blogpage/> */}
                            <CustomLink className='' to="/">

                            <button className='search-butn'>не загрузилось</button>
                            </CustomLink>   
                        </div>
                            
                   
                            }

</div>     
             
                   
            
       
                </div>

            </>
        
    )
}

export { ChoiceOfLocation};