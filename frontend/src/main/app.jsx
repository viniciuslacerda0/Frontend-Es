import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import MenuAnimes from '../template/menuAnimes'
import Routes from './routes'
import Topo from '../template/topo'
import Todo from '../todo/todo'
import Propaganda from '../template/service'

export default props => (
    <div className='container'>
        <Topo />
        <Propaganda />
        <Todo />
    </div>
)