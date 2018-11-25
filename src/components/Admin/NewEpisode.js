import React from 'react';
import Axios from 'axios';
import '../Styles/styles.css'
import './admin.css'
import PageHeader from '../Template/PageHeader'
import {Form, Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Grid, Col} from 'react-bootstrap'


class NewEpisode extends React.Component{
  constructor (props){
      super(props);
      this.state = {
          file: {},
          animeId: "",
          animeName: "",
          episodeName: "",
          chapter:0,
          description: "",
          search: "",
          searchResults: null,
          enableForm: false
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeAnimeName = this.handleChangeAnimeName.bind(this);
      this.handleChangeChapter = this.handleChangeChapter.bind(this);
      this.handleChangeDescription = this.handleChangeDescription.bind(this);
      this.search = this.search.bind(this);
      this.openForm = this.openForm.bind(this);
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

  search() {
    Axios.get("http://34.239.129.125/animes?search=" + this.state.search)
    .then(response => this.setState({searchResults:response.data.content.animes}))
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

  openForm(e) {
    console.log(e);
    this.setState({enableForm:true})
    this.setState({animeId:e.id})
    this.setState({animeName:e.name})
  }

  handleSubmit(event){

    var data = new FormData();
    data.set('file', this.state.file);
    data.set('name', this.state.name);
    data.set('chapter', this.state.chapter);
    data.set('description', this.state.description);

    var token = sessionStorage.getItem('token');
    Axios.post('http://34.239.129.125/animes/'+this.state.animeId+"/episodes", data, {
      headers: {
        authorization: `Bearer ${token}`,
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
                  {!this.state.enableForm ? <div><FormGroup>
                                      <ControlLabel>Digite o nome do anime:</ControlLabel>
                                      <FormControl type="text" value={this.state.search} onChange={this.handleChangeAnimeName}/>
                                    </FormGroup>
                  <Button bsStyle="success" onClick={this.search}>Procurar</Button><p/></div> : null}
                  {(this.state.searchResults != null && !this.state.enableForm) ? (this.state.searchResults.map(a => <div className="labelAnimes" onClick={() => this.openForm(a)}>{a.name}</div>)) : null}
                  {this.state.enableForm ? (<div className="formSubmit">
                                                            <PageHeader name={`Novo episódio no anime ${this.state.animeName}`}/>
                                                            <ControlLabel>Número do episódio:</ControlLabel>
                                                            <FormControl type="number" value={this.state.chapter} onChange={this.handleChangeChapter}/><p/>
                                                            <ControlLabel>Nome do episódio:</ControlLabel>
                                                            <FormControl type="text" value={this.state.name} onChange={this.handleChangeName}/><p/>
                                                            <ControlLabel>Descrição:</ControlLabel>
                                                            <FormControl componentClass="textarea" value={this.state.description} onChange={this.handleChangeDescription}/><p/>
                                                            <ControlLabel>Arquivo</ControlLabel>
                                                            <FormControl type="file" onChange={this.handleFile}/><p/>
                                                            <Button type="submit" bsStyle="success">Enviar</Button>
                                                            <a href="/admin"><Button bsStyle="info">Voltar</Button></a></div>) : null}
                </Form>
          </div>
        </Grid>
      </div>
    )
  }
}


export default NewEpisode;
