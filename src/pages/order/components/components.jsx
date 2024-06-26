

import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from 'moment'
import '../SideBarSearch.css'

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export class Handle extends Component {
  state = {
    showTooltip: false
  };

  render() {
    const {
      domain: [min, max],
      handle: { id, value, percent },
      getHandleProps,
      addSlide,
      removeSlide
    } = this.props;
    const { showTooltip } = this.state;

    const buttonStyle = {
      position: 'relative',
      top: -2,
      right: 30,
      zIndex:10
    }

    return (
      <React.Fragment>
        
        <div
            style={{
              left: `${percent}%`,
              position: "absolute",
              marginLeft: "-11px",
              marginTop: "-30px"
            }}
          >
          <span className="tooltiptext"> {(`${value}`)}</span>
            
          </div>
          
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
                    width: 25,
                    height: 25,
                    cursor: 'pointer',
                    borderRadius: '50%',
                    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
                    backgroundColor: '#ffff'
            
          }}
          {...getHandleProps(id, {
            onMouseLeave: () => {
              this.setState({
                showTooltip: false
              });
            },
            onMouseOver: () => {
              this.setState({
                showTooltip: true
              });
            }
          })}
        />
        


      </React.Fragment>
      
    );
  }
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: 18,
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
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired
};

// *******************************************************
// TICK COMPONENT
// *******************************************************
export function Tick({ tick, count, format }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: 14,
          width: 1,
          height: 5,
          backgroundColor: "rgb(200,200,200)",
          left: `${tick.percent}%`
        }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: 22,
          fontSize: 10,
          fontFamily: "Arial",
          textAlign: "center",
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`
        }}
      >
        {(`${format(tick.value)}`)}
      </div>
    </div>
  );
}

Tick.propTypes = {
  tick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  count: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired
};

Tick.defaultProps = {
  format: d => d
};
