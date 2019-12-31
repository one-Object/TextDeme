import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { message, Button, DatePicker } from 'antd';
import * as echarts from 'echarts';

export default class EchartsWord extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    echartsList() {
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    componentDidMount() {
        this.echartsList()
        console.log("Echarts")
    }

    add() {
        message.warning("请不要用脚趾")
    }
    render() { 
        return ( 
            <div>
                <Button type="primary" onClick={this.add.bind(this)}>哈哈</Button>
                <div id="main" style={{ width: 400, height: 400 }}></div>
            </div>
         );
    }
}