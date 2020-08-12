import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './home.less';
import Calculator from './Calculator/Calculator';

const Home = () => {
  return (
  <div className="home">
    <div className="tool">
      <div className="inner"> </div>
      <p className="word">在线实用工具</p>
    </div>
    <div className='toolist'>
      <div className='timer'>
        <img src='timer.png' alt=''/>
        <a href="http://localhost:1234/countdown">倒计时器</a>
      </div>
      <div className='calculator'>
        <img src='calculator.png' alt=''/>
        <a href="http://localhost:1234/calculator">计算器</a>
      </div>
    </div>
   </div>);
};

export default Home;