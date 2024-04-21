import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CustomLink } from './CustomLink';
import ItemOrderTicket from './ItemOrderTicket';
import './MainOrderTicket.css'

const MainOrderTicket = ()=>{
    const [addComponents, setAddComponents] = React.useState([]);
    const [amountPassengers, setAmountPassengers] = React.useState(objTicket.numberOld + objTicket.numberChild);
    const objTicket = useSelector( (state) => state.slicePrice.objTicket);
    const [agesPassengers, setAgesPassengers] = React.useState({
        age: objTicket.numberOld,
        child: objTicket.numberChild
      });
    function addPassenger() {
        if (amountPassengers >= 1) {
          setAmountPassengers((prev) => prev -= 1);
          setAddComponents([...addComponents, 1]);
        }
      }
    
      function nextStepToOrder() {
        if (agesPassengers.age === 0 && agesPassengers.child === 0) {
          console.log('далее')
        };
      }

    return (
        <div className='list-passengers'>
          {addComponents.map((e, i) => <ItemOrderTicket
            addPassenger={addPassenger}
            agesPassengers={agesPassengers}
            num={e + i}
            key={e + i} />)}
          <div className='add-passengers' onClick={addPassenger}>
            <h4 className='add-passenger-title'>Добавить пассажира</h4>
            <span className='add-passenger-img'></span>
          </div>
          <CustomLink to="/pay">
          <button className={
            agesPassengers.age === 0 && agesPassengers.child === 0 ?
              'list-passenger-btn-ok' : 'list-passenger-btn'}
            type='button'
            onClick={nextStepToOrder}>Далее</button>
             </CustomLink>
        </div>
      );
}



export default MainOrderTicket