import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import * as echarts from 'echarts';
import { message, Button, DatePicker } from 'antd';
import FormConent from '../pref/index.jsx'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

         }
    }

    componentDidMount() {
    }

    render() { 
        return ( 
            <div>
              <FormConent />
            </div>
         );
    }
}