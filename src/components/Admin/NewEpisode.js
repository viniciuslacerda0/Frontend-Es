import React from 'react';
import Axios from 'axios';
import '../Styles/styles.css'
import PageHeader from '../Template/PageHeader'
import {Form, Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Grid} from 'react-bootstrap'


class NewEpisode extends React.Component{
  constructor (props){
      super(props);
      this.state = {
          file: {},
          name: "",
          chapter:0,
          description: "",
          search: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeAnimeName = this.handleChangeAnimeName.bind(this);
      this.handleChangeChapter = this.handleChangeChapter.bind(this);
      this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleChangeName(event){
    this.setState({name: event.target.value});
  }

  handleChangeAnimeName(event){
    this.setState({search: event.target.value});
  }

  handleChangeChapter(event){
    this.setState({chapter: event.target.value});
  }

  handleChangeDescription(event){
    this.setState({description: event.target.value});
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
    var data = {}
    data.file = this.state.file;
    data.name = this.state.name;
    data.chapter = this.state.chapter;
    data.description = this.state.description;
    var token = "";
    Axios.post('http://34.239.129.125/animes/'+this.search+"/episodes", data, {
       headers: {
         authorization: `Bearer ${token}`
       }
     }).then(response => console.log(response.data))
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <Grid>
          <div className="white">
                <PageHeader name="Adicionar um episódio"/>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <ControlLabel>Digite o nome do anime:</ControlLabel>
                    <FormControl type="text" value={this.state.search} onChange={this.handleChangeAnimeName}/></FormGroup><p/>
                    <Button type="submit" bsStyle="success">Procurar</Button>

                    {!this.state.name == "" ? (<div><ControlLabel>Número do episódio:</ControlLabel>
                                                            <FormControl type="number" value={this.state.chapter} onChange={this.handleChangeChapter}/><p/>
                                                            <ControlLabel>Nome do episódio:</ControlLabel>
                                                            <FormControl type="text" value={this.state.name} onChange={this.handleChangeName}/><p/>
                                                            <ControlLabel>Descrição:</ControlLabel>
                                                            <FormControl componentClass="textarea" value={this.state.description} onChange={this.handleChangeDescription}/><p/>
                                                            <ControlLabel>Arquivo</ControlLabel>
                                                            <FormControl type="file" onChange={this.handleFile}/><p/>
                                                            <Button type="submit" bsStyle="success">Filtrar</Button>
                                                            <a href="/admin"><Button bsStyle="info">Voltar</Button></a></div>) : null}
                </Form>
          </div>
        </Grid>
      </div>
    )
  }
}


export default NewEpisode;
