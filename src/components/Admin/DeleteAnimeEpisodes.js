import React from 'react';
import PageHeader from '../Template/PageHeader';
import './admin.css'
import {Grid} from 'react-bootstrap';
import Axios from 'axios';
import Episodes from './Episodes'

class EditEpisodes extends React.Component {
  constructor (props){
      super(props);
      this.state = {
          id: this.props.match.params.id,
          episodes: [],
          name: "",
          thumb: ""
    }
    Axios.get('http://34.239.129.125/animes/'+this.state.id).then(res => this.setState({name: res.data.content.anime.name, thumb: res.data.content.anime.thumb_url, resume: res.data.content.anime.resume}))
    Axios.get('http://34.239.129.125/animes/'+this.state.id+'/episodes').then(res => this.setState({episodes: res.data.content.episodes}))
  }


  render(){
      return (
          <div >
            <Grid>
              <PageHeader name={this.state.name}/>
              <p>{this.state.resume} </p>
              <img src={this.state.thumb} alt="Foto do anime"/>

              <table className="table">
                  <tbody>
                      <tr>
                      <td><p className="center"><strong>Número do Episodio</strong></p></td>
                      <td><p className="center"><strong>Nome do Episodio</strong></p></td>
                        <td><p className="center"><strong>Descrição</strong></p></td>
                        <td><p className="center"><strong>Apagar</strong></p></td>
                        <td><p className="center"><strong>Editar</strong></p></td>
                      </tr>
                      {this.state.episodes.map((anime) => <Episodes data={anime} animeId={this.state.id}/>)}
                  </tbody>
              </table>
            </Grid>
          </div>

      );
  }
  }

export default EditEpisodes;
