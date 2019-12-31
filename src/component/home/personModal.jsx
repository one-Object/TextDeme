import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import './personEdit.css'
import {connect} from 'react-redux';
import { Modal } from 'antd';
import * as echarts from 'echarts';

let that = null;

class PersonModal extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,
        };
        that = this
    }

    handleOk = () => {
        this.setState({ visible: false })
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
        // this.echartsList()
    }
    
    render() {
        return (
            <div>
                <Modal title="图表" visible={this.state.visible} onOk={this.handleOk} onCancel={() => {this.setState({ visible: false })}}>
                    <h1>我是弹出框</h1>
                    <div id="main" style={{ width: 400, height: 400 }}></div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps=(state,parentProps)=>({

})

const mapDispatchToProps=(dispatch,parentProps)=>({

})

PersonModal.show = () => {
    that.setState({
        visible: true,
    }, () => {
        setTimeout(() => {
            that.echartsList()
        }, 300);
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonModal);