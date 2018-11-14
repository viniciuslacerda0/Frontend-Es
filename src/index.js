import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Upload from './components/Upload/Upload';
import Manage from './components/Manage/Manage';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Manage/>, document.getElementById('app'));
