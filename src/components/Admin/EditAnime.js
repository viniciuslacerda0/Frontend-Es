import React from 'react';
import Anime from './Anime'
import PageHeader from '../Template/PageHeader';
import './admin.css'
import {Grid, FormControl, Button, Form, FormGroup} from 'react-bootstrap';
import Axios from 'axios';

class Animes extends React.Component {
  constructor (props){
      super(props);
      this.state = {
          data: [],
          search: "",
          change: false,
    }
    this.search = this.search.bind(this);
    this.handleChangeAnimeName = this.handleChangeAnimeName.bind(this);
  }


  handleChangeAnimeName(event){
    this.setState({search: event.target.value});

  }

  search() {
    Axios.get("http://34.239.129.125/animes?search=" + this.state.search)
    .then(response => this.setState({data:response.data.content.animes}))
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
              <PageHeader name="Todos os Animes Cadastrados:"/>
              <table className="table">
                  <tbody>

                      <tr>
                        <td><p className="center"><strong>Nome</strong></p></td>
                        <td><p className="center"><strong>Gênero</strong></p></td>
                        <td><p className="center"><strong>Descrição</strong></p></td>
                        <td><p className="center"><strong>Apagar</strong></p></td>
                        <td><p className="center"><strong>Editar</strong></p></td>
                      </tr>
                      {this.state.change ? this.state.data.map((anime) => <Anime data={anime} />) : null}
                  </tbody>
              </table>
            </Grid>
          </div>

      );
  }
  }

export default Animes;
