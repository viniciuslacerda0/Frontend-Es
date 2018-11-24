import React from 'react'
import './custom.css'
export default props => (
    <header className='header'>
        <h2>
            {props.name} <small> {props.small} </small>
        </h2>
    </header>
)
