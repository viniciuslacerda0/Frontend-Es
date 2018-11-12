import React from 'react';
import './styles.css'
import Axios from 'axios';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

const Up = () => (
    <div className="bloco">
        <h1>Novo Episódio</h1>
        <Upload />
    </div>
);

class Upload extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          nome: "",
          num: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNum = this.handleChangeNum.bind(this);

    }

    handleSubmit(event){
        const data = {};
        data.episodio = this.episodio.files[0];
        data.nome = this.nomeAnime.value;
        data.numEpisodio = this.numEpisodio;
        console.log(data)
        Axios.post('http://localhost:8000/', data).then((response) => response.json()).then(alert("Enviado com sucesso"));
        event.preventDefault();
    };

    handleChangeName(event){
      this.setState({nome: event.target.value});
    }

    handleChangeNum(event){
      this.setState({num: event.target.value});
    }

    render(){
        return (
          <div>
            <form onSubmit={this.handleUploadVideo}>
              <FormGroup controlId="formBasicText">
              <ControlLabel>Nome do Anime</ControlLabel>
              <FormControl type="text" value={this.state.nome} onChange={this.handleChangeName}/>

              <ControlLabel>Número do Episódio:</ControlLabel>
              <FormControl type="number" className="number" value={this.state.numEps} onChange={this.handleChangeEps}/>

              <ControlLabel>Arquivo:</ControlLabel>
              <p><FormControl type="file"/></p>
                <Button type="submit" bsStyle="success">Upload</Button>
              </FormGroup>
            </form>
          </div>
        );
    }
  }

export default Up;
