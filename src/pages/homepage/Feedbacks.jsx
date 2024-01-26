import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import ReviewCard from './ReviewCard';
import './Feedbacks.css';


const contentStyle = {
  margin: '0',
  height: '500px',
  color: '#000',
  lineHeight: '18px',
  padding: '100px',
  background: 'linear-gradient(white, #DCDCDC)',
  display: "flex",
};

const contentStyle1 = {
  color: '#000',
  background: 'brown',
};

const contentStyle2 = {
  margin: '100px 0 0 200px',
};

const Feedbacks = () => (
  <ConfigProvider
  style={contentStyle1}
    theme={{
      components: {
        Carousel: {
          dotWidth: 30,
          dotHeight: 30,
          dotActiveWidth: 30,
        },
      },
    }}
   >
    <h2 style={contentStyle2}>ОТЗЫВЫ</h2>
    <Carousel>
      <div>
      <div style={contentStyle}>
      <ReviewCard/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <ReviewCard/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <ReviewCard/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <ReviewCard/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <ReviewCard/>
        </div>
      </div>
    </Carousel>
  </ConfigProvider>
);


export default Feedbacks;