import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Upload from './components/Upload/Upload';
import Manage from './components/Manage/Manage';
import AnimePage from './components/AnimePage/AnimePage.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AnimePage/>, document.getElementById('app'));
