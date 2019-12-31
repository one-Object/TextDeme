import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MyRouter from './router/index';
import { LocaleProvider } from 'antd';
import store from './redux/store.js'
import './App.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          <MyRouter></MyRouter>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
