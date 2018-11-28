import React from 'react';
import {Glyphicon, Button, FormControl} from 'react-bootstrap'
import Axios from 'axios'

class Anime extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        file: {},
        name: this.props.data.name,
        genre: this.props.data.genre,
        resume: this.props.data.resume,
        id: this.props.data.id,
        thumb: "",
        input: false,
        confirma: false
      }
      this.deleteAnime = this.deleteAnime.bind(this);
      this.editAnime = this.editAnime.bind(this);
      this.edited = this.edited.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleGenre = this.handleGenre.bind(this);
      this.handleResume = this.handleResume.bind(this);
      this.stating = this.stating.bind(this)
    }

    deleteAnime(){
      var id = this.props.data.id;
      var token = sessionStorage.getItem("token");
      Axios.delete('http://34.239.129.125/animes/'+id, {
         headers: {
           authorization: `Bearer ${token}`
         }
       }).then((res) => console.log(this.state))
    }

    editAnime(){
      this.setState({confirma: false});
      this.setState({input: true});
    }

    stating() {

      this.setState({
        confirma: true
      })
    }

    edited(){
      var data = new FormData();
      data.set('name', this.state.name);
      data.set('genre', this.state.genre);
      data.set('resume', this.state.resume);
      data.set('thumb', this.state.file);
      var id = this.state.id;
      var token = sessionStorage.getItem("token");
      Axios.put('http://34.239.129.125/animes/'+id, data,
      {
         headers: {
           authorization: `Bearer ${token}`,
           "Content-Type": "multipart/form-data"
         }
       }).then(() => document.location.reload(true)).catch(() => console.log("error"))
      this.setState({input: false});
    }

    handleName(event){
      this.setState({name: event.target.value})
    }

    handleFile(event){
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file
        });
      }

      reader.readAsDataURL(file)
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
                <td><p className="center">{this.props.data.name}</p></td>
                <td><p className="center">{this.props.data.genre}</p></td>
                <td><p className="center">{this.props.data.resume}</p></td>
                <td><p className="center">Thumb Atual</p></td>
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
            <td><FormControl type="file" onChange={this.handleFile}/><p/></td>
            <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.apagaAnime} disabled>
                 <Glyphicon glyph="remove"/></Button></p>
            </td>
            <td> <p className="center"><Button type="button" className="btn btn-default btn-sm btn-green" onClick={this.stating}>
                 <Glyphicon glyph="ok"/></Button> </p>
            </td>
            {this.state.confirma ? <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.edited}>Atualizar</Button></p>            </td>
 : null}
        </tr>
      )}
    }
}

export default Anime;
