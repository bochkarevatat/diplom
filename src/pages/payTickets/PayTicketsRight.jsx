import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from '../../components/CustomLink';
import { addUserPayment } from '../../redux/slices/AddUserSlice';
import setErrorMessage from '../../redux/slices/ErrorMessageSlice'
import './PayTicketsRight.css'

function validateName(string) {
  return !/[\d\s]/.test(string);
}

function validateEmail(string) {
  return /@/.test(string) && /\.[a-z]{2,3}$/.test(string);
}

function validatePhoneNumber(number) {
  const numberWithoutSpace = number.replace(/\s/g, "");
  const joinNum = (splitNum) => {
    splitNum[1] = splitNum[1] + " ";
    splitNum[4] = splitNum[4] + " ";
    splitNum[7] = splitNum[7] + " ";
    splitNum[9] = splitNum[9] + " ";
    return splitNum.join("");
  }
  
  if (numberWithoutSpace.length === 11 && /\d/g.test(numberWithoutSpace) && /^(8|7)/.test(numberWithoutSpace)) {
    const num = numberWithoutSpace.replace(/^(8|7)/, "+7");
    return joinNum(num.split(""));
  }

  if (numberWithoutSpace.length === 12 && /^\+\d{11}/.test(numberWithoutSpace)) {
    return joinNum(numberWithoutSpace.split(""));
  }

  return '';
}


const PayTicketsRight = () =>{

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState({
    name: '',
    patronymic: '',
    surname: '',
    phone: '',
    email: ''
  });

  const [method, setMethod] = React.useState(false);
  const [ok, setOk] = React.useState(false);

  const inputSurName =(ev)=> {
    setInputValue({ ...inputValue, surname: ev.target.value });
  };

  const inputFirstName =(ev)=>{
    setInputValue({ ...inputValue, name: ev.target.value });
}

  const inputSecondName =(ev)=>{
    setInputValue({ ...inputValue, patronymic: ev.target.value });
  }

  const inputPhone =(ev)=>{
    setInputValue({ ...inputValue, phone: ev.target.value });
  }

  const inputEmail =(ev)=>{
    setInputValue({ ...inputValue, email: ev.target.value });
  }

  const blurFirstName =() => {
    if (!validateName(inputValue.name)) {
      dispatch(setErrorMessage({
        notice: true,
        text: 'Имя указано некорректно.\n Пример: Андрей'
      }));
    }
  }

  const blurSecondName = ()=> {
    if (!validateName(inputValue.patronymic)) {
      dispatch(setErrorMessage({
        notice: true,
        text: 'Отчество указано некорректно.\n Пример: Владимирович'
      }));
    }
  }

  const blurSurName = () => {
    if (!validateName(inputValue.surname)) {
      dispatch(setErrorMessage({
        notice: true,
        text: 'Фамилия указана некорректно.\n Пример: Белоусов'
      }));
    }
  }

  const blurEmail =() => {
    if (!validateEmail(inputValue.email)) {
      dispatch(setErrorMessage({
        notice: true,
        text: 'Email указана некорректно.\n Пример: mail@gmail.com'
      }));
    }
  }

  function blurPhone() {
    if (!validatePhoneNumber(inputValue.phone)) {
      dispatch(setErrorMessage({
        notice: true,
        text: 'Номер телефона указан некорректно.\n Пример: 89128511125'
      }));
    } else {
      setInputValue({ ...inputValue, phone: validatePhoneNumber(inputValue.phone) });
    }
  }

  React.useEffect(() => {
    if (
      validateName(inputValue.name) &&
      validateName(inputValue.patronymic) &&
      validateName(inputValue.surname) &&
      validatePhoneNumber(inputValue.phone) &&
      validateEmail(inputValue.email)) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [inputValue]);

  const nextStep = ()=> {  
    dispatch(addUserPayment({
      first_name: inputValue.name,
      last_name: inputValue.surname,
      patronymic: inputValue.patronymic,
      phone: inputValue.phone,
      email: inputValue.email,
      payment_method: method ? 'Онлайн' : 'Наличными'
    }));
  };


    return (
        <form>
    
          <div className='payment'>
            <div className='payment-data'>
              <div className='data-head'>
                <h4 className='data-head-title'>Персональные данные</h4>
              </div>
    
              <div className='data-inputs-name'>
                <label className='data-names-label'>
                  <p>Фамилия</p>
                  <input className='data-names-input' type="text" required
                    value={inputValue.surname}
                    onChange={inputSurName}
                    onBlur={blurSurName} />
                </label>
                <label className='data-names-label'>
                  <p>Имя</p>
                  <input className='data-names-input' type="text" required
                    value={inputValue.name}
                    onChange={inputFirstName}
                    onBlur={blurFirstName} />
                </label>
                <label className='data-names-label'>
                  <p>Отчество</p>
                  <input className='data-names-input' type="text" required
                    value={inputValue.patronymic}
                    onChange={inputSecondName}
                    onBlur={blurSecondName} />
                </label>
              </div>
    
              <div className='data-inputs-phone'>
                <label className='data-phone-label'>
                  <p>Контактный телефон</p>
                  <input className='data-phone-input' type="tel" required placeholder='+7 ___ ___ __ __'
                    value={inputValue.phone}
                    onChange={inputPhone}
                    onBlur={blurPhone} />
                </label>
              </div>
    
              <div className='data-inputs-mail'>
                <label className='data-mail-label'>
                  <p>E-mail</p>
                  <input className='data-mail-input' type="email" required placeholder='inbox@gmail.ru'
                    value={inputValue.email}
                    onChange={inputEmail}
                    onBlur={blurEmail} />
                </label>
              </div>
            </div>
    
            <div className='payment-method'>
              <div className='method-head'>
                <h4 className='method-head-title'>Способ оплаты</h4>
              </div>
    
              <div className='method-check-online'>
                <div className={!method ? 'method-check-input' : 'method-check-input-ok'} onClick={() => setMethod(!method)}></div>
                <p className={!method ? 'method-check-text' : 'method-check-text-ok'}>Онлайн</p>
              </div>
    
              <div className='methods-payment'>
                <div className='methods-payment-text'>
                  <p>Банковской картой</p>
                  <p>PayPal</p>
                  <p>Visa QIWI Wallet</p>
                </div>
              </div>
    
              <div className='method-check-cash'>
                <div className={method ? 'method-check-input' : 'method-check-input-ok'} onClick={() => setMethod(!method)}></div>
                <p className={method ? 'method-check-text' : 'method-check-text-ok'}>Наличными</p>
              </div>
            </div>
    
          </div>
          <CustomLink className='' to="/check">
             <button className={ok ? 'payment-button-ok' : 'payment-button'} disabled={!ok} type='button' onClick={nextStep}>купить билеты</button>
          </CustomLink>
        </form>
      );
}

export default PayTicketsRight