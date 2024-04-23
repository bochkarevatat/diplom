import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Reactdatepicker()
{
    const [selectesDate, setSelectedDate]= React.useState('');

    return( 
       
          
            
          
            <DatePicker selected={ selectesDate}
            onChange={ date=>setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            // minDate={ new Date()}
            // maxDate={ new Date()}
            // filterDate={ date=>date.getDay()!=6 && date.getDay()!=0}
            //  isClearable
            showYearDropdown
            placeholderText='dd-MM-yyyy'
            className="search-form__inputDater"
     
            />                 
           
            

       
        
    );
}

export default Reactdatepicker;