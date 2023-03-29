import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import App from './App';
import { stores } from './store/index';
import 'antd/dist/reset.css';
import './index.scss';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider {...stores}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
