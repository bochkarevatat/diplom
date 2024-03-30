// import React, {useState} from 'react';
// import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
// import { Handle, Track, Tick } from './components';

// const sliderStyle = {
//     margin: '0%',
// 	position: 'relative',
// 	width: '100%'
// };

// const railStyle = {
//   position: 'absolute',
//   width: '100%',
//   height: 19,
//   borderRadius: 7,
//   cursor: 'pointer',
// 	backgroundColor: '#3E3C41',
// 	border: '1px solid white'
// };

// // const domain = [0, 7000];

// function ReactCompoundSlider(props) {
//   const [values, setValues] = useState([1920, 4500])

// //   const onChange = (values) => {
// // 		setValues({ values });
// // 		props.setPrice(values);
// //   };

//   return (
//     <div style={{ height: 15, width: '100%' }}>
//       <Slider
//         mode={2}
//         step={1}
//         domain={[0, 7000]}
//         rootStyle={sliderStyle}
//         // onChange={onChange}
//         values={[4500]}
//       >
//         <Rail>
//           {({ getRailProps }) => (
//             <div style={railStyle} {...getRailProps()} />
//           )}
//         </Rail>
//         <Handles>
//           {({ handles, getHandleProps }) => (
//             <div className="slider-handles">
//               {handles.map(handle => (
//                 <Handle
//                   key={handle.id}
//                   handle={handle}
//                   domain={[0, 7000]}
//                   getHandleProps={getHandleProps}
//                 />
//               ))}
//             </div>
//           )}
//         </Handles>
//         <Tracks left={false} right={false}>
//           {({ tracks, getTrackProps }) => (
//             <div className="slider-tracks">
//               {tracks.map(({ id, source, target }) => (
//                 <Track
//                   key={id}
//                   source={source}
//                   target={target}
//                   getTrackProps={getTrackProps}
//                 />
//               ))}
//             </div>
//           )}
//         </Tracks>
//         <Ticks count={1}>
//           {({ ticks }) => (
//             <div className="slider-ticks">
//               {ticks.map(tick => (
//                 <Tick key={tick.id} tick={tick} count={ticks.length} />
//               ))}
//             </div>
//           )}
//         </Ticks>
//       </Slider>
//     </div>
//   );
// };

import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import {  Handle, Track, Tick } from './components';
import React, {useEffect} from "react";
// import moment from "moment";
import '../SideBarSearch.css';

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

function splitArrayIntoChunksOfLen(arr, len) {
  var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}

const domain = [0, 7000];

const ReactCompoundSlider =({onChange}) =>{

    // const [state, setState] = React.useState([1920, 4500])

  const [state, setState] = React.useState({
    arr:[1920, 4500],tracks:[]
})

useEffect(()=>{
    const twoPairs = splitArrayIntoChunksOfLen(state.arr,2)
    let newTime = twoPairs.map((v)=>{
        return {start:`${v[1920]}`,
        end:`${v[4500]}`}
    })
    if(onChange)
        onChange(newTime)
},[state.arr])
    
const checkValue = (a,b)=>{
  let f = false
  const twoPairs = splitArrayIntoChunksOfLen(state.arr,2)
  twoPairs.forEach((v, i)=>{
      if(a===v[0] && b===v[1]){
        f = true
      }
  })
  return f
}
const  removeSlide =(removeEl)=>{
  // console.log("GetTrackProps")
  const val = removeEl.value
  const twoPairs = splitArrayIntoChunksOfLen(state.arr,2)
  //  console.log("twoPairs",twoPairs)
   let newArr = twoPairs.filter((v)=>!v.includes(val)).flat()

   if(newArr.length!=0){
     setState((s)=>({...s,arr:newArr}))
   }
}

const addSlide=(addEl)=>{
  const val = addEl.value
  // console.log("Add",val)
   let nextLeft =0
   let nextRight =0
  const twoPairs = splitArrayIntoChunksOfLen(state.arr,2)
  // console.log("twoPairs",twoPairs)
  twoPairs.forEach((v)=>{
    if(v[0]===val){
      nextRight = val-1 
      nextLeft = val-2
    }else if(v[1]===val){
      nextLeft = val+1
      nextRight = val+2
    }
  })
  let newArr = twoPairs.filter((v)=>(v.includes(nextRight)||v.includes(nextLeft))).flat()
  // console.log('nextLeft, nextRight',nextLeft,nextRight)
  // console.log('newArr',newArr)
  if(newArr.length===0 && nextLeft > 0 && nextRight > 0 && nextLeft <= 6999 && nextRight <= 7000){
    let a = [...state.arr,nextLeft,nextRight].sort((a, b) => a - b)
    // console.log("a",a)
    setState((s)=>({...s,arr:a}))
  }
 }

 const mystyle= {
  marginLeft: '0%',
  marginRight: '0%',
  height: '20px',
  width:'100%'
 }
    // const [values, setValues] = useState([0, 24]);

    // const onChange = (values) => {
    //       setValues({ values });
    //       props.setHoursFilter(values)
    // };
  
    return (


      <div style={mystyle}>
      <Slider
        mode={2}
        step={1}
        domain={[0, 7000]}
        rootStyle={sliderStyle}
        onUpdate={(e)=>setState((s)=>({...s,arr:e}))}
        onChange={(e)=>setState((s)=>({...s,arr:e}))}
        onSlideEnd={(e)=>console.log('slideEnd',e)}
        values={state.arr}
      >
        <Rail>
          {({ getRailProps }) => (
            <div style={railStyle} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  addSlide={()=>addSlide(handle)}
                  removeSlide={()=>removeSlide(handle)}
                  key={handle.id}
                  handle={handle}
                  domain={[0, 7000]}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks onChange={(e)=>{console.log("Tracks")}} left={false} right={false}>
          {({ tracks, getTrackProps }) => {
            console.log("tracks",tracks)
            return (
            <div className="">
              {tracks.map(({ id, source, target },i) => {
                // console.log("index",i)
                return (
                  checkValue(source.value,target.value)?<Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />:null
              )
              })}
            </div>
          )
          }}
        </Tracks>
        <Ticks count={0}>
          {({ ticks }) => (
            <div className="slider-zero">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
  </div>


    




    );
  }


export default ReactCompoundSlider;