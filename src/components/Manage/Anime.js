import React from 'react';
import {Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'
import Axios from 'axios'

class Anime extends React.Component{
    constructor(props){
      super(props);
      this.apagaAnime = this.apagaAnime.bind(this);
    }

    apagaAnime(){
      console.log(this.props.data.nome);
    }
    render(){
        return(
            <tr>
                <td><p className="center">{this.props.data.nome}</p></td>
                <td><p className="center">{this.props.data.episodes}</p></td>
                <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.apagaAnime}>
                     <Glyphicon glyph="remove"/></Button></p>
                </td>
                <td> <p className="center"><Button type="button" className="btn btn-default btn-sm btn-blue">
                     <Glyphicon glyph="pencil"/></Button> </p>
                </td>
            </tr>

        );
    }
}

export default Anime;
