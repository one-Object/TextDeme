import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import style from './log.less'
import { message, Button, DatePicker } from 'antd';

class LogIndex extends Component {
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
 
export default LogIndex;