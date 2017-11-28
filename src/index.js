import React from 'react';

import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './lib/rex-ui/rex-ui.css';

// import 'antd/dist/antd.css';

import './lib/animated/animate.min.css';

import './scss/common.scss';

import './lib/rem/rem.js';

import * as ToolsFunc from './tools/ToolsFunc.js';

import Routers from './router/index.jsx';





ReactDOM.render(<Routers />, document.getElementById('root'));

registerServiceWorker()