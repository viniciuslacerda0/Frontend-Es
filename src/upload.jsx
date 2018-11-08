import React from 'react';
import './styles.css'
import Axios from 'axios';

const axios = require('axios');

const Up = () => (
    <div class="bloco">
        <p>Novo Episódio</p>
        <Upload />
    </div>
);

class Upload extends React.Component {
    constructor (props){
        super(props);

        this.handleUploadVideo = this.handleUploadVideo.bind(this);
    }

    handleUploadVideo(ev){
        const data = new FormData();
        data.append('episodio', this.episodio.files[0]);
        data.append('nomeAnime', this.nomeAnime.value);
        data.append('numEpisodio', this.numEpisodio);

        axios.post('http://localhost:8000/', data).then((response) => response.json()).then(alert("Enviado com sucesso"));
    };

    render(){
        return (
          <div>
            <form onSubmit={this.handleUploadVideo}>
              <div>
                <label class="labels">Nome do Anime: </label><input ref={(ref) => { this.nomeAnime = ref; }} type="text" class="animeName" placeholder="Nome do anime" />
              </div>
              <br />

              <div>
                <label class="labels">Episódio: </label><input ref={(ref) => { this.numEpisodio = ref; }} type="number" class="episodes" min="1"/>
              </div>
              <br />

              <div>
                <input ref={(ref) => { this.episodio = ref; }} type="file" />
              </div>
              <br />
              <div>
                <button type="submit">Upload</button>
              </div>
            </form>
          </div>
        );
    }
  }

export default Up;
