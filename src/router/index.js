import React, { Component } from 'react';
import {Provider} from 'react-redux';
import EchartsWord from '../ECharts/echarts.jsx'
import Home from '../component/home/index.jsx'
import {HashRouter as Router, Switch, Route, Link, Redirect, NavLink} from 'react-router-dom';
import store from '../redux/store';  //导入容器

export default class MyRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        {/* <h2>
                            <NavLink to="/" replace activeStyle={{marginLeft: 20}}>首页</NavLink> 
                            <NavLink to="/echartsWord" replace activeStyle={{color: origin}}>ECharts</NavLink>
                            <hr /> 
                        </h2> */}
                        <Switch>
                            <Route path="/home" exact component={Home}></Route>
                            <Route path="/echartsWord" strict component={EchartsWord}></Route>
                            <Redirect to="/home"></Redirect>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}
