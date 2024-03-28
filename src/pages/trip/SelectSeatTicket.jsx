

// function dateFromAndTo(time) {
//   if (time) {
//     return new Date(time * 1000).toLocaleTimeString('ru', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };
//   return '';
// };

// const SelectSeatTicket = () => {


//     return (
        
// <div className='select-seat'>

// <div className='select-train-another'>
//   <span className='select-train-img'></span>
//   <button className='select-train-btn' type='button' onClick={console.log('select-train-btn')}>Выбрать другой поезд</button>
// </div>

// <div className='select-train'>
// {cityList.map((el) => {
//    return (
//     <div className='train-name-items'>
//   <div className='select-train-route'>
//     <span className='select-train-img'></span>
//     <div className='select-train-desc'>
//       <h5 className='train-desc-name'>{el.departure.train.name}</h5>
//       <p className='train-desc-city'>{el.departure.from.city.name} &#8594;</p>
//       <p className='train-desc-city'>{el.departure.to.city.name}</p>
//     </div>
//   </div>

//   <div className='select-direction-time'>
//     <div className='select-direction-city'>
//       <h5 className='select-time'>{dateFromAndTo(el.departure.from.datetime)}</h5>
//       <p className='select-direction-name'>{el.departure.from.city.name}</p>
//       <p className='select-direction-station'>{`${el.departure.from.city} вокзал`}</p>
//     </div>
//     <div className='direction-arrow'></div>
//     <div className='select-direction-city'>
//       <h5 className='select-time'>{dateFromAndTo(el.departure.to.datetime)}</h5>
//       <p className='select-direction-name'>{el.departure.to.city.name}</p>
//       <p className='select-direction-station'>{`${el.departure.to.city} вокзал`}</p>
//     </div>
//   </div>
//   </div>
//    )
//   })}
// </div>
// </div>
  
//     )
// }

// export {SelectSeatTicket}