import React, { Component } from 'react'
import { Tabs, Button } from 'antd';
import EditTable from './editTable/index.jsx'
import PersonModal from './personModal.jsx'
import HotTableDemo from './hotTable.jsx'
import './style.less'
import SearchResult from './searchResult.jsx'

const TabPane = Tabs.TabPane;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addPerson: [],
        }
    }
    
    onChangeTabs = (key) => {

    }

    showModal = () => {
        debugger;
        PersonModal.show()

    }

    componentDidMount() {
        const { flag } = this.state;
    }
    
    render() {
        return (
            <div className="homeStyle">
                <Button onClick={this.showModal}>点我</Button>
                <Tabs defaultActiveKey="3" onChange={this.onChangeTabs}>
                    <TabPane tab="可编辑表格" key="1"><EditTable/></TabPane>
                    <TabPane tab="handsontable" key="2"><HotTableDemo /></TabPane>
                    <TabPane tab="哈哈" key="3"><SearchResult/></TabPane>
                    <TabPane tab="增加" key="4"><SearchResult/></TabPane>
                    <TabPane tab="我是测试git" key="5"><SearchResult/></TabPane>
                </Tabs>
                <PersonModal/>
            </div>
        )
    }
}

export default Home
