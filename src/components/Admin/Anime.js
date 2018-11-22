import React from 'react';
import {Glyphicon, Button, FormControl} from 'react-bootstrap'
import Axios from 'axios'

class Anime extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: this.props.data.name,
        genre: this.props.data.genre,
        resume: this.props.data.resume,
        id: this.props.data._id,
        input: false
      }
      this.deleteAnime = this.deleteAnime.bind(this);
      this.editAnime = this.editAnime.bind(this);
      this.edited = this.edited.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleGenre = this.handleGenre.bind(this);
      this.handleResume = this.handleResume.bind(this);
    }

    deleteAnime(){
      var id = this.state.id;
      var token = ""
      Axios.delete('http://34.239.129.125/animes/'+id, {
         headers: {
           authorization: `Bearer ${token}`
         }
       }).then((res) => console.log(res.data))
            .catch(() => alert("error"));
    }

    editAnime(){
      this.setState({input: true});
    }

    edited(){
      var data = {nome: this.state.nome, numEps: this.state.episodes};
      Axios.put('', data).then(() => console.log("ok")).catch(() => alert("error"))
      this.setState({input: false});
    }

    handleName(event){
      console.log( event.target.value);
      this.setState({name: event.target.value})
    }


    handleGenre(event){
      this.setState({genre: event.target.value});
    }

    handleResume(event){
      this.setState({resume: event.target.value});
    }


    render(){
        if(!this.state.input){
        return(
            <tr>
                <td><p className="center">{this.state.name}</p></td>
                <td><p className="center">{this.state.genre}</p></td>
                <td><p className="center">{this.state.resume}</p></td>
                <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.deleteAnime}>
                     <Glyphicon glyph="remove"/></Button></p>
                </td>
                <td> <p className="center"><Button type="button" className="btn btn-default btn-sm btn-blue" onClick={this.editAnime}>
                     <Glyphicon glyph="pencil"/></Button> </p>
                </td>
            </tr>

        );
      } else{
        return(
        <tr>
            <td><FormControl type="text" className="center" value={this.state.name} onChange={this.handleName}/></td>
            <td><FormControl type="text" className="center number" value={this.state.genre} onChange={this.handleGenre}/></td>
            <td><FormControl componentClass="textarea" type="text" className="center number" value={this.state.resume} onChange={this.handleResume}/></td>
            <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.apagaAnime} disabled>
                 <Glyphicon glyph="remove"/></Button></p>
            </td>
            <td> <p className="center"><Button type="button" className="btn btn-default btn-sm btn-green" onClick={this.edited}>
                 <Glyphicon glyph="ok"/></Button> </p>
            </td>
        </tr>
      )}
    }
}

export default Anime;
