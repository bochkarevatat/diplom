import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './Filter.css';
import {setFilterN} from '../../../redux/slices/FilterTrainSlice'

const Filter = () => {
    const dispatch = useDispatch();
    const [activeF, setActive] = React.useState(false);
    const filter = useSelector((state) => state.filter.filterN);
    const list = [5, 10, 20];
    
    const onClickListItem = (obj) => {
        dispatch(setFilterN(obj))
        setActive(false);
        
      };
      
      
    

return(
    <>
       <div className="filter_label">
        
        <span className="filter-title">показывать по:</span>
        {/* <span onClick={() => setActive(!active)}>{filter}</span> */}
      </div>
           
                <div className="filter__popup">
                     <div className="filter-choice">
        {list.map((obj, i) => (
          <a
            key={i}
            onClick={() => onClickListItem(obj)}
           
            className={filter === obj ? 'activeF' : ''}>
            {obj}
           
          </a>
        ))}
      </div>
    </div>
 

</>
)


}
export default Filter;