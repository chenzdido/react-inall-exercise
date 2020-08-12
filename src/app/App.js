import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Calculator from './Calculator/Calculator';
import Countdown from './Countdown/Countdowm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <div className="navigation">
          <ul className="nav">
            <li>
            <Link to='/' className="link">Home</Link>
            </li>
            <li>
            <Link to='/products' className="link">在线计算器</Link>
            </li>
            <li className="link">
              <Link to='/my-profile' className="link">在线倒计时器</Link>
            </li>
          </ul>
        </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calculator' component={Calculator}/>
            <Route exact path='/countdown' component={Countdown}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
