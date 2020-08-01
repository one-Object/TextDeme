import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MyRouter from './router/index';
import { ConfigProvider } from 'antd';
import store from './store';
import './App.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <MyRouter></MyRouter>
        </ConfigProvider>
      </Provider>
    );
  }
}

export default App;
