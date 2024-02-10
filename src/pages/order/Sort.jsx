import React from 'react';
import './Sort.css'


const Sort = ({value, oneChangeSort}) => {

    const [open, setOpen] = React.useState(false);
    const list = [
        { name: 'времени', sortProperty: 'departure.from.datetime' },
        { name: 'стоимости', sortProperty: 'min_price' },
        { name: 'длительности', sortProperty: 'departure.duration' },
      ];
        // const sortName = list[value].name;

        const onClickListItem =(i) =>{
            oneChangeSort(i);
            setOpen(false);
        }


    return (
        <div className="sort">
      <div className="sort__label">
        
        <b>Сортировать по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
               
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
                {/* {console.log('из сортировки',value.name)} */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
}

export default Sort;