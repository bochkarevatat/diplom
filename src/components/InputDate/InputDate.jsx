import React from 'react';
// import { memo } from "react";
// import clsx from "clsx";
import { useSelector, useDispatch} from 'react-redux';
import './inputDate.css';
import CalendarItem from './InputCalendar'
import {clearChoiceDate } from '../../redux/slices/FilterTrainSlice'

const InputDate = ({inputStyle, calendarStyle}) => {

   
      const fromDate = useSelector((state) => state.filter.fromDate)
      const toDate = useSelector((state) => state.filter.toDate)
      const [current, setCurrent] = React.useState(false);
      const ref = React.useRef(null);

      const dispatch = useDispatch();

      const handlerInput = () => {

        console.log("up", calendarStyle.includes('from'))
        if (fromDate !== '' && calendarStyle.includes('from')) {
          dispatch(clearChoiceDate());
        }
    
        if (toDate !== '' && calendarStyle.includes('from')) {
          dispatch(clearChoiceDate());
        }
    
        setCurrent(true);
      }
    
      function handlerBlur() {
        if (ref.current?.className === 'none') {
          setCurrent(false);
        }
      }

      return (

        <>
        <input className={inputStyle} type="text" placeholder="ДД.ММ.ГГ"
          value={calendarStyle.includes('from') ? fromDate : toDate}
          onChange={handlerInput}
          onClick={handlerInput}
          onBlur={handlerBlur} />
 {current ? <CalendarItem /> : null}

        {/* {current ? <CalendarItem classStyle={calendarStyle} /> : null} */}
      </>

      )
}

export default InputDate