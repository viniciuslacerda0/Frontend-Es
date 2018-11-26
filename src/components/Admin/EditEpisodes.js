import React from 'react';
import AnimeEpisodes from './AnimeEpisodes'
import PageHeader from '../Template/PageHeader';
import './admin.css'
import {Grid, FormControl, Button, Form, FormGroup} from 'react-bootstrap';
import Axios from 'axios';

class EditEpisodes extends React.Component {
  constructor (props){
      super(props);
      this.state = {
          data: [],
          searchResults: [],
          search: "",
          change: false,
    }
    this.search = this.search.bind(this);
    this.handleChangeAnimeName = this.handleChangeAnimeName.bind(this);
  }

  componentDidMount() {
        Axios.get("http://34.239.129.125/animes")
    .then(response => this.setState({searchResults:response.data.content.animes}))
  }

  handleChangeAnimeName(event){
    this.setState({search: event.target.value});

  }

  search() {
    Axios.get("http://34.239.129.125/animes?search=" + this.state.search)
    .then(response => this.setState({searchResults:response.data.content.animes}))
    .then(res => console.log(this.state.searchResults))
    .then(res => this.setState({change:true}))
  }


  render(){
      return (
          <div >
            <Grid>
              <PageHeader name="Filtrar um Anime:"/>
              <div className="filter">
                <Form inline>
                  <FormGroup>
                  <FormControl
                      style={{"marginRight":"10px"}}
                      placeholder="Filtrar Anime"
                      type="text"
                      onChange={this.handleChangeAnimeName}/>
                  </FormGroup>
                  <Button bsStyle="success" onClick={this.search}>Filtrar</Button>
                  <a href="/admin"><Button bsStyle="danger">Voltar</Button></a>
                </Form>

              </div>
              {this.state.change ? null : <PageHeader name="Todos os Animes Cadastrados:"/> }
              <table className="table">
                  <tbody>

                      <tr>
                        <td><p className="center"><strong>Nome</strong></p></td>
                        <td><p className="center"><strong>Episodios</strong></p></td>
                      </tr>
                      {this.state.searchResults.map((anime) => <AnimeEpisodes data={anime} />)}
                  </tbody>
              </table>
            </Grid>
          </div>

      );
  }
  }

export default EditEpisodes;
