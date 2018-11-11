import React from 'react'

export default () => {
    const listRows = () => {
        const list = props.list
        return list.map(anime => (
                <li key={anime._id} id="topAnimes" className="list-group-item">
                    <a href="#">
                        {anime.description}
                    </a>
                </li>
        ))
    }

    return (
        <ul className="list-group">
            <li id="topAnimesBase" className="list-group-item">
                <i className="fa fa-angle-double-right fa-lg"></i>
                    CATEGORIAS
                <i className="fa fa-angle-double-left fa-lg"></i>
            </li>
            {listRows()}
        </ul>
    )
}