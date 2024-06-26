import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import setErrorMessage from '../../redux/slices/ErrorMessageSlice';
import { setAddPassenger, removeSeatPassenger } from '../../redux/slices/SliceOrderPassengers';

import './ItemOrderTicket.css'

const validateName = (string)=> {
  console.log("поверка имени")
  return !/[\d\s]/.test(string);
}


const validateDate = (string) =>{
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(string)) {
      const arrDate = string.split('.');
      const dateNow = new Date().getTime();
      const dateString = new Date(`${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`).getTime();
      return dateNow > dateString;
    }
    return false;
  }
const validatePassportSeries =(string) => {
    return /^\d{4}$/.test(string);
  }
  
  const validatePassportNumber = (string) => {
    return /^\d{6}$/.test(string);
  }
  
  const validateBirthNumber = (string) => {
    return /^[v,i,x,m]{1,4}[а-я]{1,2}\d{6}$/.test(string);
  }

  const upperCaseBirthNumber = (string)=> {
    const upperString = string.toUpperCase();
    const splitString = upperString.split('');
    for (let i = 0; i < splitString.length; i += 1) {
      if (/[А-Я]/.test(splitString[i])) {
        splitString[i - 1] += ' ';
        break;
      }
    }
  
    for (let i = 0; i < splitString.length; i += 1) {
      if (/\d/.test(splitString[i])) {
        splitString[i - 1] += ' ';
        break;
      }
    }
  
    return splitString.join('');
  };
  



const ItemOrderTicket = ({addPassenger, num, agesPassengers}) =>{


  const { totalSeatsNumber, seatsChildWithout } = useSelector( (state) => state.addUser);
  const dispatch = useDispatch();

    const [none, setNone] = React.useState({
        main: false,
        age: 'none',
        docs: 'none',
        valid: false,
        ok: false
      });

      const [select, setSelect] = React.useState({
        age: 'Взрослый',
        docs: 'Паспорт РФ',
        typeDoc: 'Паспорт РФ'
      })
      const [docsValue, setDocsValue] =  React.useState({
        passportSeries: '9402',
        passportNumber: '796206',
        birthNumber: ''
      })

      const [nameValue, setNameValue] = React.useState({
        name: 'Андрей',
        nameOfFather: 'Васильевич',
        surname: 'Белов'
      });

      const [gender, setGender] = React.useState(false);
      const [dateValue, setDateValue] = React.useState(new Date());
      const [validText, setValidText] = React.useState('');
      const [limited, setLimited] = React.useState(false);
      const [button, setButton] = React.useState(false);
      const inputRefDateBirth = React.useRef(null);

      // console.log(validateDate(inputRefDateBirth.current.input.value), '<=validateDate')
      
      const blurSurName = () => {
        if (!validateName(nameValue.surname)) {
          dispatch(setErrorMessage({
            notice: true,
            text: 'Фамилия указана некорректно.\n Пример: Белоусов'
          }));
        }
      }
      
      
      const blurFirstName =() => {
        if (!validateName(nameValue.name)) {
          dispatch(setErrorMessage({
            notice: true,
            text: 'Имя указано некорректно.\n Пример: Андрей'
          }));
        }
      }
      
      const blurSecondName = ()=> {
        if (!validateName(nameValue.patronymic)) {
          dispatch(setErrorMessage({
            notice: true,
            text: 'Отчество указано некорректно.\n Пример: Владимирович'
          }));
        }
      }


      const getSortAge = ()=> {
        if (none.age === 'none') {
          setNone({ ...none, age: 'list-age-select' });
        } else {
          setNone({ ...none, age: 'none' });
        }
      }

      const getSelectAge = (ev) => {
        if (agesPassengers.age > 0 && agesPassengers.child > 0) {
          setSelect({ ...select, age: ev.currentTarget.outerText });
        }
    
        if (agesPassengers.age === 0 && agesPassengers.child > 0) {
          setSelect({ ...select, age: 'Детский' });
        }
    
        if (agesPassengers.age > 0 && agesPassengers.child === 0) {
          setSelect({ ...select, age: 'Взрослый' });
        }
    
        setNone({ ...none, age: 'none' });
      }

      

      const blurDate =() => {
        console.log("проверка проверки")
        if (!validateDate(inputRefDateBirth.current.input.value)) {
          console.log("проверка не прошла")
          setNone({ ...none, valid: true });
          setValidText('Дата рождения указана некорректно\n Пример: 24.02.2022');
        }
      }

      const getSortDocs = () => {
        if (none.docs === 'none') {
          if (select.docs === 'Свидетельство о рождении') {
            setNone({ ...none, docs: 'list-docs-select-long' });
          } else {
            setNone({ ...none, docs: 'list-docs-select' });
          }
        } else {
          setNone({ ...none, docs: 'none' });
        }
      }

      const getSelectDocs = (ev) => {
        setSelect({ ...select, docs: ev.currentTarget.outerText });
        setNone({ ...none, docs: 'none' });
      }
      console.log(select, 'select')
      
      const birthNumber = (ev) => {
        setDocsValue({ ...docsValue, birthNumber: ev.target.value });
      }

      const blurPassSeries = () => {
        if (!validatePassportSeries(docsValue.passportSeries)) {
          setNone({ ...none, valid: true });
          setValidText(`Серия паспорта указана некорректно\n Пример: 9420`);
        }
      }
      const blurPassNumber = () => {
        if (!validatePassportNumber(docsValue.passportNumber)) {
          setNone({ ...none, valid: true });
          setValidText('Номер паспорта указан некорректно\n Пример: 796453');
        }
      }

      const blurBirthdayNumber = () => {
        if (!validateBirthNumber(docsValue.birthNumber)) {
          setNone({ ...none, valid: true });
          setValidText('Номер свидетельства о рожденни указан некорректно\n Пример: VIIIАП123456');
        }
      }

      const inputSurName =(ev)=>{
        setNameValue({ ...nameValue, surname: ev.target.value });
      }
      const inputFirstName =(ev)=>{
        setNameValue({ ...nameValue, name: ev.target.value });
    }
     const inputSecondName =(ev)=> {
      setNameValue({ ...nameValue, patronymic: ev.target.value });
    };
     const passportSeries = (ev)=>{
      setDocsValue({ ...docsValue, passportSeries: ev.target.value });
    }

    const passportNumber = (ev) => {
      setDocsValue({ ...docsValue, passportNumber: ev.target.value });
    }

    console.log(select.typeDoc, 'select.typeDoc')
    function addPassengerToStore() {
      const seats = {
        coach_id: totalSeatsNumber,
        person_info: {
          is_adult: select.age === 'Взрослый' ? true : false,
          first_name: nameValue.name,
          last_name: nameValue.surname,
          patronymic: nameValue.patronymic,
          gender: gender,
          birthday: dateValue.toLocaleDateString("ru-RU"),
          document_type: select.docs,
          document_data: `${select.typeDoc === 'Паспорт РФ' ? `${docsValue.passportSeries} ${docsValue.passportNumber}` : upperCaseBirthNumber(docsValue.birthNumber)}`
        },
        seat_number: totalSeatsNumber[num - 1],
        is_child: seatsChildWithout > 0 ? true : false,
        include_children_seat: seatsChildWithout > 0 ? true : false
      }
      dispatch(setAddPassenger(seats));
      setButton(true);
    }



      const nextPassenger = () => {
        if (nameValue.name !== '' && nameValue.patronymic !== '' && nameValue.surname !== '') {
          if (dateValue !== '' && ((docsValue.passportNumber !== '' && docsValue.passportSeries !== '') || docsValue.birthNumber !== '')) {
            if (!none.valid) {
              setNone({ ...none, ok: true });
              addPassenger();
              addPassengerToStore();
            } else {
              setNone({ ...none, valid: true });
              setValidText('Заполните все поля!');
            }
          } else {
            setNone({ ...none, valid: true });
            setValidText('Заполните все поля!');
          }
        } else {
          setNone({ ...none, valid: true });
          setValidText('Заполните все поля!');
        }
      }





    return (
        <div className='passenger'>
      <header className={none.main ? 'pass-header' : 'pass-header-plus'}>
      
        
    <span className={none.main ? 'pass-header-up' : 'pass-header-down'} onClick={() => setNone({ ...none, main: !none.main })}></span>
        
        <h4 className='pass-header-title'>Пассажир {num}</h4>
        <span className={none.main ? 'pass-header-close' : 'none'}
         onClick={(e) => console.log(e, none)}
         >

         </span>
      </header>

      <div className={none.main ? 'pass-main' : 'none'}>
        <div className='pass-choice-age'>
          <div className='pass-select' onClick={getSortAge}>
            {select.age}
          </div>
          <div className={none.age}>
            <div className={agesPassengers.age > 0 ? 'select-age' : 'select-age-disable'} onClick={getSelectAge}>Взрослый</div>
            <div className={agesPassengers.child > 0 ? 'select-child' : 'select-child-disable'} onClick={getSelectAge}>Детский</div>
          </div>
        </div>

        <div className='pass-form-names'>
          <label className='pass-names-label' htmlFor="">
            <p>Фамилия</p>
            <input className='pass-names-input' type="text" required
              value={nameValue.surname}
              onChange={inputSurName}
              onBlur={blurSurName}
               />
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Имя</p>
            <input className='pass-names-input' type="text" required
              value={nameValue.name}
              onChange={inputFirstName}
              onBlur={blurFirstName}
               />
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Отчество</p>
            <input className='pass-names-input' type="text" required
              value={nameValue.patronymic}
              onChange={inputSecondName}
              onBlur={blurSecondName} 
              />
          </label>
        </div>

        <div className='pass-form-birth'>
          <div className='pass-choice-gender'>
            <p className='choice-gender-text'>Пол</p>
            <div className='choice-gender'>
               <p className={gender ? 'gender-choice-color' : 'gender-human'} onClick={() => setGender(!gender)}>м</p>
              <p className={gender ? 'gender-human' : 'gender-choice-color'} onClick={() => setGender(!gender)}>ж</p> 
            </div> 
          </div>
          <div className='pass-birth-date'>
            <label className='pass-birth-label' htmlFor="">
              <p>Дата рождения</p>

              <DatePicker selected={dateValue}
                locale={ru}
                onChange={ date => setDateValue(date)}
                dateFormat="dd.MM.yyyy"
                ref={inputRefDateBirth}
                onBlur={blurDate}
                value={dateValue}
                showYearDropdown
                placeholderText='ДД.ММ.ГГГГ'
                className="pass-birth-input"
            />         

              {/* <input className='pass-birth-input' type="date" placeholder='ДД.ММ.ГГ' required
                value={dateValue}
                onChange={inputDate}
                onBlur={blurDate}
              /> */}
            </label>
          </div>
        </div>

        <div className='pass-form-check'>
          <div className={!limited ? 'pass-check-input' : 'pass-check-input-ok'} onClick={() => setLimited(!limited)}></div>
          <p className='pass-check-text'>ограниченная подвижность</p>
        </div>

        <div className='pass-form-docs'>
          <div className='pass-docs-select'>
            <p>Тип документа</p>
            <div className='select-docs' onClick={getSortDocs}>
              {select.docs}
            </div>
            <div className={none.docs}>
              <div className='select-doc-passport' onClick={getSelectDocs}>Паспорт РФ</div>
              <div className='select-doc-birth' onClick={getSelectDocs}>Свидетельство о рождении</div>
            </div>
          </div>

          {select.docs === 'Паспорт РФ' ?
            <>
              <div className='pass-docs-series'>
                <label className='docs-series-label' htmlFor="">
                  <p>Серия</p>
                  <input className='docs-series-input' type="text" required placeholder='__  __  __  __'
                    value={docsValue.passportSeries}
                    onChange={passportSeries}
                    onBlur={blurPassSeries}
                     />
                </label>
              </div>
              <div className='pass-docs-number'>
                <label className='docs-number-label' htmlFor="">
                  <p>Номер</p>
                  <input className='docs-number-input' type="text" required placeholder='__  __  __  __  __  __'
                    value={docsValue.passportNumber}
                    onChange={passportNumber}
                    onBlur={blurPassNumber} 
                    />
                </label>
              </div>
            </> :
            <>
              <div className='pass-docs-birth'>
                <label className='docs-birth-label' htmlFor="">
                  <p>Номер</p>
                  <input className='docs-birth-input' type="text" required placeholder='_ _ _ _ _ _ _ _ _ _ _ _'
                    value={docsValue.birthNumber}
                    onChange={birthNumber}
                    onBlur={blurBirthdayNumber} 
                    />
                </label>
              </div>
            </>}
        </div>

        <div className={none.ok ? 'pass-footer-ok' : 'pass-footer'}>
          <span className={none.ok ? 'pass-valid-ok' : 'none'}></span>
          <p className={none.ok ? 'pass-valid-text-ok' : 'none'}>Готово</p>
          <button className={!none.valid ? 'pass-button' : 'none'} type='button' disabled={button}
            onClick={nextPassenger}>{!button && num === 1 ? 'Продолжить' : 'Следующий пассажир'}</button>
          <div className={none.valid ? 'pass-valid' : 'none'}>
            <span className='pass-valid-close' onClick={() => setNone({ ...none, valid: false })}></span>
            <p className='pass-valid-text'>{validText}</p>
          </div>
        </div>
      </div>

    </div>
      );
}



export default ItemOrderTicket