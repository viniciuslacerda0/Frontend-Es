import React from 'react';


const Ger = () => (
    <div>
        <h1>Gerencia de animes</h1>
        <Animes />
    </div>
);

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
                <table>
                    <tbody>
                        <tr>
                          <td>Nome</td>
                          <td>Episodios</td>
                          <td>Apagar</td>
                          <td>Editar</td>
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
                <td>{this.props.data.nome} </td>
                <td>{this.props.data.episodes} episodios</td>
                <td> <button type="button" class="btn btn-default btn-sm btn-red" onClick={this.apagaAnime}> 
                     <span class="glyphicon glyphicon-remove"></span></button>
                </td>
                <td> <button type="button" class="btn btn-default btn-sm btn-blue">
                     <span class="glyphicon glyphicon-pencil"></span></button>
                </td>
            </tr>

        );
    }
}

export default Ger;
