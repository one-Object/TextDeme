import React, { Component } from 'react'
import { Table, Input, Button } from 'antd';
import './style.less';
import _ from 'lodash'

let that = null;

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    profession: '经理',
    job: '程序员',
    address: '西湖区湖底公园1号',
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    profession: '经理',
    job: '程序员',
    address: '西湖区湖底公园1号',
}, {
    key: '3',
    name: '胡彦祖',
    age: 42,
    profession: '经理',
    job: '程序员',
    address: '西湖区湖底公园1号'
}];

class EditTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addPerson: [],
            dataSource,
            isEdit: false,
            selectedRows: [],
            selectedRowKeys: [],
            rowKey: [],
        }
        that = this;
        this.mapObj = {};
        this.srcDOM = {};
    }

    inputBlur = (record, index, filed, e) => {
        const { dataSource } = this.state
        dataSource[index][filed] = e.target.value
        this.setState({ dataSource }, () => {
            console.log(dataSource)
        })
    }

    editHandle = () => {
        this.setState({ isEdit: true })
        this.srcDOM = {
            f1: '我修改了',
            f2: '222',
            f3: '333',
            f4: '444',
            f5: '555',
            f6: {
                f1: '111',
                f2: '222',
                f3: '333',
                f4: {
                    f1: '111',
                    f2: '222',
                    f3: '333',
                }
            }
        }
        console.log('改变的', this.srcDOM);
        console.log(this.mapObj);
    }

    saveHandle = () => {
        this.setState({ isEdit: false })
        this.srcDOM = {
            f1: '111',
            f2: '222',
            f3: '333',
            f4: '444',
            f5: '555',
            f6: {
                f1: '111',
                f2: '222',
                f3: '333',
                f4: {
                    f1: '111',
                    f2: '222',
                    f3: '333',
                }
            }
        }
        console.log(Object.keys(this.srcDOM))
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.mapObj = _.merge({}, this.srcDOM)  // 深复制
        console.log(this.srcDOM);
        console.log(this.mapObj);
    }

    onAddClick = (index) => {
        console.log(index)
        const { dataSource } = this.state
        dataSource.splice(index + 1, 0, {
            name: '',
            age: '',
            profession: '',
            job: '',
            address: ''
        })
        this.setState({ dataSource })
    }

    rowClassName = (record, index) => {
        let className = '';
        className = this.state.rowKey.indexOf(record.key) > -1 ? 'isColor' : '';
        return className
    }

    componentDidMount() {

    }

    render() {
        const { addPerson, isEdit } = this.state;

        const columns = [{
            title: '序号',
            dataIndex: 'index',
            render: (text, record, index) => index + 1,
        }, {
            title: '操作',
            dataIndex: 'control',
            render: (text, record, index) => <span><a onClick={() => this.onAddClick(index)}>添加</a></span>
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            render: (text, record, index) =>
                isEdit ? <Input onChange={(e) => this.inputBlur(record, index, "age", e)} value={record.age} /> : record.age
        }, {
            title: '职称',
            dataIndex: 'profession',
            render: (text, record, index) => <Input onChange={(e) => this.inputBlur(record, index, "profession", e)} value={record.profession} />
        }, {
            title: '工作',
            dataIndex: 'job',
        }, {
            title: '住址',
            dataIndex: 'address',
        }];

        const rowSelection = {

            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`);
                let rowKey = []
                selectedRows.map((item, index) => {
                    rowKey.push(item.key)
                })
                this.setState({ rowKey, selectedRows })
            }
        };

        return (
            <div className="editTable">
                <div className="table-title">
                    <Button onClick={this.editHandle}>编辑</Button>
                    <Button onClick={this.saveHandle}>保存</Button>
                </div>
                <Table rowKey="key" bordered dataSource={this.state.dataSource} columns={columns} pagination={false} 
                rowClassName={this.rowClassName} rowSelection={rowSelection}/>
            </div>
        )
    }
}

export default EditTable
