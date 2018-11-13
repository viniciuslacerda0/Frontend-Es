import React from 'react';
import Axios from 'axios';
import '../Styles/styles.css'
import {Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'


class NewAnime extends React.Component{
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
                  <FormControl type="number" value={this.state.numEps} onChange={this.handleChangeEps} disabled={this.state.indefinido}/>
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


export default NewAnime;
