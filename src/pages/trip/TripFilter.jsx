

const TripFilter = () => {
  return (
    <section className='trip-filter'>
      <div className="trip-filter__block">
        <div className='trip-filter__date'>
          <label className="trip-filter__date-label">Дата поездки</label>
          <div className="trip-filter__date-container">
            <input className="find-tickets__input trip-filter__input" type="text" placeholder="ДД/ММ/ГГ" />
          </div>
        </div>
        <div className='trip-filter__date'>
          <label className="trip-filter__date-label">Дата возвращения</label>
          <div className="trip-filter__date-container">
            <input className="trip-filter__dateinput" type="text" placeholder="ДД/ММ/ГГ" />
          </div>
        </div>
      </div>
      <div className="trip-filter__block">
        <ul className="carriage-type__list">
          <li className="carriage-type__list-item">Купе <input type="checkbox" name="coupe" id="" /></li>
          <li className="carriage-type__list-item">Плацкарт <input type="checkbox" name="second-class" id="" /></li>
          <li className="carriage-type__list-item">Сидячий <input type="checkbox" name="sedentary" id="" /></li>
          <li className="carriage-type__list-item">Люк <input type="checkbox" name="lux" id="" /></li>
          <li className="carriage-type__list-item">Wi-Fi <input type="checkbox" name="wi-fi" id="" /></li>
          <li className="carriage-type__list-item">Экспресс <input type="checkbox" name="express" id="" /></li>
        </ul>
      </div>
      <div className="trip-filter__block">Стоимость</div>
      <div className="trip-filter__block">
        <h3>Туда</h3>
        <button className='trip-filter__trip-time-btn' type="button"></button>
      </div>
      <div className="trip-filter__block">
        <h3>Обратно</h3>
        <button className='trip-filter__trip-time-btn' type="button"></button>
      </div>
    </section>
  )
}

export default TripFilter;