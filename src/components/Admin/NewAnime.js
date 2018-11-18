import React from 'react';
import Axios from 'axios';
import '../Styles/styles.css'
import {Glyphicon, Button, Panel, FormGroup, ControlLabel, FormControl, Grid} from 'react-bootstrap'


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
    var data = {}
    data.name = this.state.name;
    data.genre = this.state.genre;
    data.resume = this.state.resume;
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
                    <ControlLabel>Nome do Anime</ControlLabel>
                    <FormControl type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    <ControlLabel>Genero principal</ControlLabel>
                    <FormControl type="text" value={this.state.genre} onChange={this.handleChangeGenre}/>
                    <ControlLabel>Descrição</ControlLabel>
                    <FormControl componentClass="textarea" value={this.state.resume} onChange={this.handleChangeResume}/>
                    <ControlLabel>Thumb</ControlLabel>
                    <FormControl type="file" onChange={this.handleFile}/>
                  </FormGroup>
                  <Button type="submit" bsStyle="success">Submit</Button>
                </form>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </Grid>
      </div>
    )
  }
}


export default NewAnime;
