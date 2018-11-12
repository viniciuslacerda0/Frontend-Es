import React from 'react';
import './styles.css'
import Axios from 'axios';
import {Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'

const Ger = () => (
    <div className="bloco">
      <h1>Gerencia de animes</h1>
      <NovoAnime />
      <Animes />
    </div>
);

class NovoAnime extends React.Component{
  constructor (props){
      super(props);
      this.state = {
          open: false,
          indefinido: false,
          nome: "",
          numEps: 0
      }
      this.undefinedEps = this.undefinedEps.bind(this);
      this.handleChangeEps = this.handleChangeEps.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  undefinedEps(){
    this.setState({ indefinido: !this.state.indefinido, numEps: 0 })
  }

  handleChangeEps(event) {
    this.setState({numEps: event.target.value});
  }

  handleChangeName(event) {
    this.setState({nome: event.target.value});
  }

  handleSubmit(event){
    if(this.state.numEps < 0){
      this.setState({numEps: 0});
    }
    var data = {}
    data.nome = this.state.nome;
    data.numEps = this.state.numEps;
    Axios.post('', data).then(response => console.log(response)).catch(alert("Problema"));
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <Button bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}><Glyphicon glyph="plus"/> Novo anime</Button>
        <Panel expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Nome do Anime</ControlLabel>
                  <FormControl type="text" value={this.state.nome} onChange={this.handleChangeName}/>
                  <ControlLabel>Numero de episodios</ControlLabel>
                  <FormControl type="number" className="number" value={this.state.numEps} onChange={this.handleChangeEps} disabled={this.state.indefinido}/>
                  <Checkbox onClick={this.undefinedEps}>Indefinido</Checkbox>
                </FormGroup>
                <Button type="submit" bsStyle="success">Submit</Button>
              </form>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    )
  }
}

class Animes extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            data: [
                {
                    nome: "Anime 1", episodes: 12
                },

                {
                    nome: "Anime 2", episodes: 22
                },

                {
                    nome: "Anime 3", episodes: 25
                }
            ]
      }
    }

    render(){
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                          <td><p className="center">Nome</p></td>
                          <td><p className="center">Numero de Episodios</p></td>
                          <td><p className="center">Apagar</p></td>
                          <td><p className="center">Editar</p></td>
                        </tr>
                        {this.state.data.map((anime, i) => <Anime key = {i} data = {anime} />)}
                    </tbody>
                </table>
            </div>

        );
    }
  }

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

export default Ger;
