import React from 'react';
import Anime from './Anime'

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

export default Animes;
