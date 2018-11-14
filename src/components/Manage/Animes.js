import React from 'react';
import Anime from './Anime'

class Animes extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            data: [
                {
                  name: "Naruto", genre: "Luta", resume: "Naruto é hokage"
                },

                {
                    name: "Anime 2", genre: "Comedia", resume: "Esse anime é engraçado"
                },

                {
                  name: "Boku no pico", genre: "Terror", resume: "TOP"
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
                          <td><p className="center">Genero</p></td>
                          <td><p className="center">Descrição</p></td>
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
