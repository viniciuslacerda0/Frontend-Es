import React from 'react';
import {Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'
import Axios from 'axios'

class Anime extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        nome: this.props.data.nome,
        episodes: this.props.data.episodes,
        input: false
      }
      this.apagaAnime = this.apagaAnime.bind(this);
      this.editaAnime = this.editaAnime.bind(this);
      this.editou = this.editou.bind(this);
      this.handleNome = this.handleNome.bind(this);
      this.handleNum = this.handleNum.bind(this);
    }

    apagaAnime(){
      var anime = this.props.data;
      var nome = anime.nome;
      Axios.delete('localhost:8000/'+nome, nome).then(() => console.log("sucesso")).catch(() => alert("error"))
    }

    editaAnime(){
      this.setState({input: true});
    }

    editou(){
      var data = {nome: this.state.nome, numEps: this.state.episodes};
      Axios.put('', data).then(() => console.log("ok")).catch(() => alert("error"))
      this.setState({input: false});
    }

    handleNome(event){
      console.log( event.target.value);
      this.setState({nome: event.target.value})
    }


    handleNum(event){
      this.setState({episodes: event.target.value});
    }


    render(){
        if(!this.state.input){
        return(
            <tr>
                <td><p className="center">{this.state.nome}</p></td>
                <td><p className="center">{this.state.episodes}</p></td>
                <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.apagaAnime}>
                     <Glyphicon glyph="remove"/></Button></p>
                </td>
                <td> <p className="center"><Button type="button" className="btn btn-default btn-sm btn-blue" onClick={this.editaAnime}>
                     <Glyphicon glyph="pencil"/></Button> </p>
                </td>
            </tr>

        );
      } else{
        return(
        <tr>
            <td><FormControl type="text" className="center" value={this.state.nome} onChange={this.handleNome}/></td>
            <td><FormControl type="number" className="center number" value={this.state.episodes} onChange={this.handleNum}/></td>
            <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.apagaAnime}>
                 <Glyphicon glyph="remove"/></Button></p>
            </td>
            <td> <p className="center"><Button type="button" className="btn btn-default btn-sm btn-green" onClick={this.editou}>
                 <Glyphicon glyph="ok"/></Button> </p>
            </td>
        </tr>
      )}
    }
}

export default Anime;
