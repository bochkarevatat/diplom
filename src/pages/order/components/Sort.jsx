import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import {setSort} from '../../../redux/slices/FilterTrainSlice'
import './Sort.css'


const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort)
    const [open, setOpen] = React.useState(false);
    const list = [
        { name: 'времени', sortProperty: 'datetime' },
        { name: 'стоимости', sortProperty: 'min_price' },
        { name: 'длительности', sortProperty: 'duration' },
      ];
        // const sortName = list[value].name;

        const onClickListItem =(obj) =>{
          dispatch(setSort(obj))
            setOpen(false);
        }


    return (
        <div className="sort">
      <div className="sort__label">
        
        <b>Сортировать по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
               
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
                {console.log('из сортировки', sort.sortProperty)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
}

export default Sort;