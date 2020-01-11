import React, { Component } from 'react'
import { Table, Input, Button, Row, Col, Icon } from 'antd';
import './style.less';
import _ from 'lodash'
import axios from 'axios';

let that = null;

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dataSource: []
        }
        that = this;
        this.timer = null;
    }

    componentDidMount() {
    }

    onChange = (e) => {
        let value = e.target.value
        this.setState({ value })
        let debQuery = this.debounce(this.query, 400)
        debQuery()
    }

    // 防抖
    debounce = (fn, times = 1000) => {
        return (...rest) => {
            let args = rest;
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                fn.apply(this, args)
            }, times)
        }
    }

    query = () => {
        axios.get(`https://randomuser.me/api/?results=10&seed=${this.state.value}`).then(res=>{
            if (res.status === 200 && res.data) {
                this.setState({
                    dataSource: res.data.results
                })
            }
        }).catch(err=>{
            console.log('请求失败',err);
        });
    }

    render() {
        const { value, dataSource } = this.state;

        return (
            <div className="searchResult">
                <Input value={value} placeholder="请输入关键字搜索用户" onChange={this.onChange}/>
                <ul className='box'>
                    {
                        dataSource.map((item, index) => {
                            return (
                                <li key={index} className="showList">
                                    <div className="picture">
                                        <img src={item.picture.medium} alt=""/>
                                    </div>
                                    <div>
                                        <div>{item.name.first + ' ' + item.name.last}</div>
                                        <div><Icon type="mail"/>{' ' + item.email}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default SearchResult
