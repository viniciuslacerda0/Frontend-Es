import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Axios from 'axios'

class AnimeEpisodes extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        id: this.props.data.id,
      }
      Axios.get('http://34.239.129.125/animes/'+this.props.data.id+'/episodes').then(res => this.setState({episodes: res.data.content.episodes}))
    }

    render(){
        return(
        <tr>
            <td><p className="center">{this.props.data.name}</p></td>
            <td><p className="center">					<Link to={{
            											pathname: `/admin/editar_episodios/${this.state.id}`,
            								}}><Button className="btn btn-default btn-sm btn-red">
                 <Glyphicon glyph="chevron-right"/></Button></Link></p>
            </td>
        </tr>
    );
    }
}

export default AnimeEpisodes;
