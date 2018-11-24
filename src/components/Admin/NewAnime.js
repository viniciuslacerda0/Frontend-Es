import React from 'react';
import Axios from 'axios';
import '../Styles/styles.css'
import PageHeader from '../Template/PageHeader'
import {Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Grid, Form} from 'react-bootstrap'


class NewAnime extends React.Component{
  constructor (props){
      super(props);
      this.state = {
          genre: "",
          name: "",
          resume: "",
          file: {}

      }
      this.handleChangeGenre = this.handleChangeGenre.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeResume = this.handleChangeResume.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFile = this.handleFile.bind(this);
  }

  handleChangeGenre(event) {
    this.setState({genre: event.target.value});
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeResume(event) {
    this.setState({resume: event.target.value});
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

  handleSubmit(event){

    var data = new FormData();
    data.set('name', this.state.name);
    data.set('genre', this.state.genre);
    data.set('resume', this.state.resume);
    data.set('thumb', this.state.file);

    const url = 'http://34.239.129.125/'
    // var token = (colocar o token aqui)
    var token = sessionStorage.getItem("token");
    Axios.post(url + 'animes', data,
    { headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data'
    }
  }).then(response => console.log(response.data))
        .catch(response => console.log(response.data));

    event.preventDefault();
  }

  render(){
    return(
      <div>
        <Grid>
          <div className="white">
                <PageHeader name="Novo Anime"/>
                <Form className="form" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <ControlLabel>Nome do Anime</ControlLabel>
                    <FormControl type="text" value={this.state.name} onChange={this.handleChangeName}/><p/>
                    <ControlLabel>Genero principal</ControlLabel>
                    <FormControl type="text" value={this.state.genre} onChange={this.handleChangeGenre}/><p/>
                    <ControlLabel>Descrição</ControlLabel>
                    <FormControl componentClass="textarea" value={this.state.resume} onChange={this.handleChangeResume}/><p/>
                    <ControlLabel>Thumb</ControlLabel>
                    <FormControl type="file" onChange={this.handleFile}/><p/>
                  </FormGroup>
                  <Button type="submit" bsStyle="success">Submit</Button>
                  <a href="/admin"><Button bsStyle="info">Voltar</Button></a>
                </Form>
          </div>
        </Grid>
      </div>
    )
  }
}


export default NewAnime;
