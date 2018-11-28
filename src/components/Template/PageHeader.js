import React from 'react'
import './custom.css'
export default props => (
    <header className='header'>
        <h2 className="agadois">
            {props.name} <small className="ismall"> {props.small} </small>
        </h2>
    </header>
)
