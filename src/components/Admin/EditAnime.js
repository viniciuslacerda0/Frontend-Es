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
            anime: ""
      }
      this.handleChange = this.handleChange.bind(this);
      Axios.get('http://34.239.129.125/animes').then(response => response.data.content.animes).then(res => this.setState({data: res}));
    }

    handleChange(e) {
      e.preventDefault();
      this.setState({ anime: e.target.value });

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
                        onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit" bsStyle="success">Filtrar</Button>
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
                        {this.state.data.map((anime, i) => <Anime key = {i} data = {anime} />)}
                    </tbody>
                </table>
              </Grid>
            </div>

        );
    }
  }

export default Animes;
