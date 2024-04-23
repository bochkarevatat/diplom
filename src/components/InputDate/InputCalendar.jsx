import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import {setSearchValueTo, setSearchValueFrom, setDateFrom, setDateTo, setIdFrom, setIdTo, setBtn} from '../../redux/slices/FilterTrainSlice';

import './inputDate.css';


const validateCalendarDate =(string)=> {
    return /^\d{2}\.\d{2}\.\d{4}$/.test(string);
  };

  function dayOfMonth(year, month) {
    const date = new Date(year, month, 0);
    const numDate = date.getDate();
    const arrDay = [];
  
    for (let i = 1; i <= numDate; i++) {
      arrDay.push(i);
    };
  
    return arrDay;
  };
  


function getCurrentDate(date) {
    const currentDate = new Date();
  
    const formatDate = (date) => {
      return new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
    };
  
    const result = {
      numDate: currentDate.getDate(),
      year: currentDate.getFullYear(),
      month: formatDate(currentDate),
      numberMonth: currentDate.getMonth(),
      choiceDate: (year, month, day) => new Intl.DateTimeFormat("ru").format(new Date(year, month, day)),
      nameMonth: (year, month) => formatDate(new Date(year, month))
    };
  
    if (date) {
      const splitDate = date.split('.');
      const dateForMonth = new Date(Number(splitDate[2]), Number(splitDate[1]) - 1, Number(splitDate[0]));
      result.numDate = +splitDate[0];
      result.year = +splitDate[2];
      result.month = formatDate(dateForMonth);
      result.numberMonth = Number(splitDate[1]) - 1;
    }
  
    return result;
  }
  const DaysInWeek = ( array, date, currentMonth, otherMonth, onChoiceDate ) => {
    return (
      <tr>
        {array.map((el, i) => {
          if (el.curDay !== 'this') {
            return <td
              className="date-other-month"
              key={el.numDay + i}>
              {el.numDay}
            </td>
          } else if (el.curDay === 'this' && el.numDay < date && currentMonth === otherMonth) {
            return <td
              className="date-other-month"
              key={el.numDay + i}>
              {el.numDay}
            </td>
          } else if (el.curDay === 'this' && el.numDay === date && currentMonth === otherMonth) {
            return <td
              className="date-today"
              onClick={() => onChoiceDate(el.numDay, otherMonth)}
              key={el.numDay + i}>
              {el.numDay}
            </td>
          } else if (el.curDay === 'this') {
            return <td
              className="date-month"
              onClick={() => onChoiceDate(el.numDay, otherMonth)}
              key={el.numDay + i}>
              {el.numDay}
            </td>
          }
          return null;
        })}
      </tr>
    );
  }



function monthInWeeks(numberMonth) {
    let numMonth = null;
  
    if (numberMonth === undefined) {
      numMonth = new Date().getMonth();
    } else {
      numMonth = numberMonth + 1;
    }
  
    const year = new Date().getFullYear();
    const arrCurDays = dayOfMonth(year, numMonth);
    const arrPrevDays = new Date(year, numMonth - 1, 0).getDate();
    const weekDay = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const weeks = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      fifth: [],
      sixth: []
    };
  
    for (let i = 0; i < arrCurDays.length; i++) {
      const firstDayMonth = new Date(year, numberMonth, arrCurDays[i]);
      const firstDayMonthOfWeek = new Intl.DateTimeFormat("ru-RU", {
        weekday: "short"
      }).format(firstDayMonth);
  
      const day = {
        numDay: arrCurDays[i],
        curDay: 'this'
      };
  
      if (weeks.first.length < 7) {
        weekDay.forEach((e, index) => {
          if (firstDayMonthOfWeek === e) {
            weeks.first[index] = day;
          }
        });
      } else if (weeks.second.length < 7) {
        weekDay.forEach((e, index) => {
          if (firstDayMonthOfWeek === e) {
            weeks.second[index] = day;
          }
        });
      } else if (weeks.third.length < 7) {
        weekDay.forEach((e, index) => {
          if (firstDayMonthOfWeek === e) {
            weeks.third[index] = day;
          }
        });
      } else if (weeks.fourth.length < 7) {
        weekDay.forEach((e, index) => {
          if (firstDayMonthOfWeek === e) {
            weeks.fourth[index] = day;
          }
        });
      } else if (weeks.fifth.length < 7) {
        weekDay.forEach((e, index) => {
          if (firstDayMonthOfWeek === e) {
            weeks.fifth[index] = day;
          }
        });
      } else if (weeks.sixth.length < 7) {
        weekDay.forEach((e, index) => {
          if (firstDayMonthOfWeek === e) {
            weeks.sixth[index] = day;
          }
        });
      }
    }
  
    let prevDay = arrPrevDays;
    for (let i = 6; i >= 0; i -= 1) {
      if (!weeks.first[i]) {
        const day = {
          numDay: prevDay,
          curDay: 'prev'
        };
        weeks.first[i] = day;
        prevDay -= 1;
      }
    }
  
    let count = 0;
    for (let i = 0; i < 7; i++) {
      if (!weeks.fifth[i]) {
        count += 1;
        const day = {
          numDay: count,
          curDay: 'next'
        };
        weeks.fifth[i] = day;
      }
    }
  
    for (let i = 0; i < 7; i++) {
      if (!weeks.sixth[i]) {
        count += 1;
        const day = {
          numDay: count,
          curDay: 'next'
        };
        weeks.sixth[i] = day;
      }
    }
  
    return weeks;
  }


const  CalendarItem = (classStyle) =>{

    const fromDate = useSelector((state) => state.filter.fromDate)
    const toDate = useSelector((state) => state.filter.toDate)
    const date = getCurrentDate(fromDate);
    const [numMonth, setNumMonth] = React.useState(date.numberMonth);
    const [nameMonth, setNameMonth] = React.useState(date.month);
    const [days, setDays] = React.useState(null);
    const ref = React.useRef(null);
    const dispatch = useDispatch();

    const refClassListToggle =() => {
        ref.current?.classList.remove(...ref.current.classList)
        ref.current?.classList.add('none');
      };
    const prevMonth = () => {
        setNumMonth((prev) => (prev - 1));
        setNameMonth(date.nameMonth(date.year, numMonth - 1));
      };

      const nextMonth =() => {
        setNumMonth((prev) => (prev + 1));
        setNameMonth(date.nameMonth(date.year, numMonth + 1));
      };

      const getDate = (choiceDate) => {
        if (classStyle.includes('from') && validateCalendarDate(choiceDate)) {
          dispatch(setDateFrom(choiceDate));
          refClassListToggle();
        }
    
        if (classStyle.includes('to') && validateCalendarDate(choiceDate)) {
          dispatch(setDateTo(choiceDate));
          refClassListToggle();
        }
      }


      React.useEffect(() => {
        function outsideClick(ev) {
          if (ev.target instanceof HTMLElement && !ref.current?.contains(ev.target)) {
            refClassListToggle();
          }
        }
    
        document.addEventListener("mousedown", outsideClick);
        return () => document.removeEventListener("mousedown", outsideClick);
      }, [ref]);
    
      React.useEffect(() => {
        const weeks = monthInWeeks(numMonth);
        setDays(weeks);
      }, [numMonth]);

      const onChoiceDate =(day, month)=>{
        const choiceDate = date.choiceDate(date.year, month, day);
        const compareChoiceDate = new Date(date.year, month, day).getTime();
        const compareToday = new Date(date.year, date.numberMonth, date.numDate).getTime();
    
        if (fromDate === '' && compareChoiceDate >= compareToday) {
          getDate(choiceDate);
        } else if (fromDate !== '' && compareToday <= compareChoiceDate) {
          getDate(choiceDate);
        }
      }



    return (
        <div className={classStyle} ref={ref}>
          <div className='cal-triangle'></div>
          <div className='cal-main'>
            <div className='cal-month'>
              <button className='prev-month' onClick={prevMonth} type='button'></button>
              <p className='cal-month-text'>{nameMonth}</p>
              <button className='next-month' onClick={nextMonth} type='button'></button>
            </div>
            <table className='cal-table'>
              <colgroup className='date-column'>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="date-week-end" />
                <col className="date-week-end" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" title="Понедельник">Пн</th>
                  <th scope="col" title="Вторник">Вт</th>
                  <th scope="col" title="Среда">Ср</th>
                  <th scope="col" title="Четверг">Чт</th>
                  <th scope="col" title="Пятница">Пт</th>
                  <th scope="col" title="Суббота">Сб</th>
                  <th scope="col" title="Воскресенье">Вс</th>
                </tr>
              </thead>
              {days !== null ? <tbody>
                {Object.entries(days).map((el) =>
                  <DaysInWeek
                    array={el[1]}
                    date={date.numDate}
                    currentMonth={date.numberMonth}
                    otherMonth={numMonth}
                    onChoiceDate={onChoiceDate}
                    key={el[0]} />
                )}
              </tbody> : null}
            </table>
          </div>
        </div>
      )




}

export default CalendarItem