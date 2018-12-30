import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './index.less'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import 'antd/dist/antd.css';
import * as echarts from 'echarts';
import { message, Button, DatePicker } from 'antd';

class FormConent extends Component {
    constructor(props) {
        super(props);
        this.state = {

         }
    }
    render() { 
        return ( 
            <div>
                Form表单
                <Button type="primary">点击我</Button>
                <Button >点击我</Button>
                <DatePicker />
            </div>
         );
    }
}
 
export default FormConent;