import * as React from 'react';

// *******************************************************
// HANDLE COMPONENT
// *******************************************************


export const Handle = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps
}) => (
  <div
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: 'absolute',
      marginLeft: '-22px',
      marginTop: '-5px',
      zIndex: 2,
      width: 30,
      height: 30,
      cursor: 'pointer',
      borderRadius: '50%',
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#ffff'
    }}
    {...getHandleProps(id)}
  />
);

// *******************************************************
// TRACK COMPONENT
// *******************************************************


export const Track = ({
  source,
  target,
  getTrackProps
}) => (
  <div
    style={{
      position: 'absolute',
      height: 20,
      zIndex: 1,
      backgroundColor: '#FFA800',
      borderRadius: 7,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);

// *******************************************************
// TICK COMPONENT
// *******************************************************


export const Tick = ({ tick, count }) => (
  <div>
    <div
      style={{
        position: 'absolute',
        marginTop: 35,
        width: 1,
        height: 0,
        backgroundColor: 'rgb(200,200,200)',
        left: `${tick.percent}%`
      }}
    />
    <div
      style={{
        position: 'absolute',
        marginTop: 35,
        fontSize: 14,
        textAlign: 'center',
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
				left: `${tick.percent}%`
      }}
    >
      {tick.value}
    </div>
  </div>
);