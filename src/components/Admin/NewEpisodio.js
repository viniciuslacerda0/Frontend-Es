import React from 'react';
import Axios from 'axios';
import '../Styles/styles.css'
import {Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Grid} from 'react-bootstrap'


class NewEpisodio extends React.Component{
  constructor (props){
      super(props);
      this.state = {
          file: {}

      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFile = this.handleFile.bind(this);
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
    Axios.post('http://ec2-54-91-147-129.compute-1.amazonaws.com/animes', data).then(response => console.log(response)).catch(alert("Problema"));
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <Grid>
          <Panel expanded={true}>
            <Panel.Collapse>
              <Panel.Body>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <ControlLabel>Selecione o Anime:</ControlLabel>
                    <FormControl type="" value={this.state.name} onChange={this.handleChangeName}/>
                    <ControlLabel>Arquivo</ControlLabel>
                    <FormControl type="file" onChange={this.handleFile}/>
                  </FormGroup>
                  <Button type="submit" bsStyle="success">Filtrar</Button>
                  <a href="/admin"><Button bsStyle="info">Voltar</Button></a>
                </form>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </Grid>
      </div>
    )
  }
}


export default NewEpisodio;
