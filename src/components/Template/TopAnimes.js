import React from 'react'

export default props => {

    const listRows = () => {
        const list = [1,2,3,3,4,4,4,4,4,4,4,4,4]
        return list.slice(0, 10).map(anime => (
                <tr key={anime._id}  id="topAnimes" className="list-group-item">
                    <a href="/">
                        {anime.description}
                    </a>
                </tr>
        ))
    }

    return (
        <table id="topAnimesTable">
            {listRows()}
        </table>
    )
}
