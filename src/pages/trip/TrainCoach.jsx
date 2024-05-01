import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './TrainCoach.css';

import {TrainButtonSecond, TrainButtonThird, TrainButtonForth, TrainButtonFirst}  from './SelectedSeatsTrain/TrainButton'
import { setSeatsType, setTrainCoach, setClassType} from '../../redux/slices/SlicePrice';
import SectionInformTicket from './SelectedSeatsTrain/SectionInformTicket'



const selectionFourthClass = {
  topWindow: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
  topAisle: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  botSeatAisle: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
  botAisle: [34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
  botWindow: [33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 62],
  luxSeats:[1, 3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,18],
};





const TrainCoach = () => {
  const [itemsTrain, setItemsTrain] = React.useState([]);
  const trainList = useSelector( (state) => state.trainSlice.trainSelection);
  
  const idTrain = trainList.departure._id
  // const[loading, setLoading] = React.useState(false);
  // const[fourth, setFourth] = React.useState(false);
  // const [classType, setClassType] = React.useState();
  const trainCoach = useSelector( (state) => state.slicePrice.trainCoach);
  console.log(itemsTrain, 'itemsTrain')

  const dispatch = useDispatch();
  const ticket = useSelector( (state) => state.slicePrice.ticket);
  const classType = useSelector( (state) => state.slicePrice.classType);
  console.log(classType, 'classType')

  React.useEffect(() =>{
  
    fetch(`https://students.netoservices.ru/fe-diplom/routes/${idTrain}/seats`)
      .then((res) => {return res.json()})
      .then(data => {
        setItemsTrain(data)

      })
    }, [idTrain]) 

   
    React.useEffect(() =>{

      const Debounce = setTimeout(() => {
        dispatch(setClassType(itemsTrain[0].coach.class_type));
        dispatch(setSeatsType(itemsTrain[0].seats))
        dispatch(setTrainCoach(itemsTrain[0].coach))   
      }, 1000);
    
      return () => clearTimeout(Debounce);
      
    }, [itemsTrain, ticket])

  console.log(classType)
  
return (
   <section>
    <SectionInformTicket/>
    <div >
        {classType === 'first' ?
       
       <div className="coach1">
       <div className="coach4-numder-ticket">{trainCoach.name.slice(-2)}</div>
      <TrainButtonFirst  arrSelectSecond={selectionFourthClass} />
      </div>: 
         classType === 'second' ?
         <div className="coach">
          <div className="coach4-numder-ticket">{trainCoach.name.slice(-2)}</div>
         <TrainButtonSecond  arrSelectSecond={selectionFourthClass} />
         </div>: 
         classType === 'third' ?
         <div className="coach3">
          <div className="coach4-numder-ticket">{trainCoach.name.slice(-2)}</div>
         <TrainButtonThird  arrSelectThird={selectionFourthClass}/>
         </div>: 
         classType === 'fourth' ?
         <div className="coach4">
          <div className="coach4-numder-ticket">{trainCoach.name.slice(-2)}</div>
         <TrainButtonForth  arrSelectThird={selectionFourthClass}/>
         </div>: null
        } 
    </div>
    </section>
    
)
                    }


  export default TrainCoach          

