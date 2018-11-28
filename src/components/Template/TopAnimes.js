import React from 'react'
import {Link} from 'react-router-dom';
import './custom.css'

export default props => {

    const listRows = () => {
        const list = props.list
        return list.slice(0, 10).map(anime => (
            <Link to={{
                pathname:`/anime/${anime.id}`,
                state: {id:anime.id}
            }}
            >
                <tr key={anime._id}  id="topAnimes" className="list-group-item">
                        {anime.name}
                </tr>
            </Link>
        ))
    }

    return (
        <table id="topAnimesTable">
            {listRows()}
        </table>
    )
}
