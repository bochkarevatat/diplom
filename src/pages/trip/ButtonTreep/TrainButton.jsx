import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './TrainButton.css'


const TrainButton = (({ toggleCarriage, activeCarriage, buttonNumber }) => (
    <button
      type="button"
      className="carriageNumbern"
      onClick={() => toggleCarriage(buttonNumber)}
      disabled={activeCarriage === buttonNumber}
    >
      {buttonNumber}
    </button>
  ));

  export default TrainButton