import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
 */
import { Provider } from 'react-redux';

/**
 * 引入创建好的store实例
 */
import store from './store';
import App from './App.jsx';
import 'antd/dist/antd.css';
import 'normalize.css/normalize.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
