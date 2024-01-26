import React, {useState} from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Handle, Track, Tick } from './components';

const sliderStyle = {
    margin: '0%',
	position: 'relative',
	width: '100%'
};

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 19,
  borderRadius: 7,
  cursor: 'pointer',
	backgroundColor: '#3E3C41',
	border: '1px solid white'
};

// const domain = [0, 7000];

function ReactCompoundSlider(props) {
  const [values, setValues] = useState([1920, 4500])

//   const onChange = (values) => {
// 		setValues({ values });
// 		props.setPrice(values);
//   };

  return (
    <div style={{ height: 15, width: '100%' }}>
      <Slider
        mode={2}
        step={1}
        domain={[0, 7000]}
        rootStyle={sliderStyle}
        // onChange={onChange}
        values={[4500]}
      >
        <Rail>
          {({ getRailProps }) => (
            <div style={railStyle} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={[0, 7000]}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={1}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
};

export default ReactCompoundSlider;