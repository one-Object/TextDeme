import React, { Component } from 'react'
import { Table, Input, Button } from 'antd';
import './style.less';

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
    }

    saveHandle = () => {
        this.setState({ isEdit: false })
    }

    onAddClick = (index) => {
        const { dataSource } = this.state
        dataSource.splice(index + 1, 0, {
            key: dataSource.length + 1,
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
