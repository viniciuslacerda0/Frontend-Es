import React from 'react';
import '../Styles/styles.css'
import Axios from 'axios';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'


class UploadForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          name: "",
          chapter: 0,
          file: {},
          description: "",
          episodeName: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeChapter = this.handleChangeChapter.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeEpisodeName = this.handleChangeEpisodeName.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }

    handleSubmit(event){
        const data = {};
        data.video = this.state.file;
        data.name = this.state.episodeName;
        data.chapter = this.state.chapter;
        data.description = this.state.description;
        // data.anime  Precisa pegar o objeto anime pelo back
        Axios.post('http://ec2-54-91-147-129.compute-1.amazonaws.com/episodes', data).then((response) => response.json()).then(() => alert("Enviado com sucesso")).catch(alert("error"));
        event.preventDefault();
    };

    handleChangeName(event){
      this.setState({name: event.target.value});
    }

    handleChangeChapter(event){
      this.setState({chapter: event.target.value});
    }

    handleChangeDescription(event){
      this.setState({description: event.target.value});
    }

    handleChangeEpisodeName(event){
      this.setState({episodeName: event.target.value});
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

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="formBasicText">
              <ControlLabel>Nome do Anime</ControlLabel>
              <FormControl type="text" value={this.state.name} onChange={this.handleChangeName}/>
              <br/>
              <ControlLabel>Número do Episódio:</ControlLabel>
              <FormControl type="number" min="0" className="number" value={this.state.chapter} onChange={this.handleChangeChapter}/>
              <br/>
              <ControlLabel>Nome do episodio</ControlLabel>
              <FormControl type="text" value={this.state.episodeName} onChange={this.handleChangeEpisodeName}/>
              <br/>
              <ControlLabel>Descrição do episodio</ControlLabel>
              <FormControl componentClass="textarea" value={this.state.description} onChange={this.handleChangeDescription}/>
              <br/>
              <ControlLabel>Arquivo:</ControlLabel>
              <p><FormControl type="file" onChange={this.handleFile}/></p>
              <br/>

              <Button type="submit" bsStyle="success">Upload</Button>
              </FormGroup>
            </form>
          </div>
        );
    }
  }

export default UploadForm;
