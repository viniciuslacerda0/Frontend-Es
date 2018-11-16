import React from 'react';
import Topo from '../Template/Topo';
import Propaganda from '../Template/Propaganda';
import PageHeader from '../Template/PageHeader';
import AnimeByGenreBox from './AnimeByGenreBox';
import {Grid, Col, Row} from 'react-bootstrap';
 
// formato do props passado
//name={this.props.location.state.nome}

export default class Genre extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			animes: [
				{"nome": "Afro Samurai", "episodios": 12, thumb:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Afro_vol1_english.jpg/220px-Afro_vol1_english.jpg"},
				{"nome": "Boku no Hero", "episodios": 21, thumb:"https://images-na.ssl-images-amazon.com/images/I/91kjVOEopVL._SY606_.jpg"},
				{"nome": "Captain Tsubasa", "episodios": 12, thumb:"http://www.klab.com/files/user/201710101913_1.png"},
				{"nome": "Dragon Maid", "episodios": 12, thumb:"https://images-na.ssl-images-amazon.com/images/I/51vXn4dZ3cL._SX349_BO1,204,203,200_.jpg"},
				{"nome": "Dragon Ball Z", "episodios": 28, thumb:"https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR2,0,182,268_AL_.jpg"},
				{"nome": "Etotama", "episodios": 28, thumb:"https://myanimelist.cdn-dena.com/images/anime/13/72555l.jpg"},
				{"nome": "Fullmetal Alchemist", "episodios": 15,thumb:"https://images-na.ssl-images-amazon.com/images/I/91fhhUusE1L.jpg"},
				{"nome": "Goblin Slayer", "episodios": 15,thumb:"https://images-na.ssl-images-amazon.com/images/I/61jmKuHnlkL.jpg"},
				{"nome": "Nanatsu no Taizai", "episodios": 6, thumb:"https://boomo.com.br/images/noticias/nanatsu-no-taizai-imashime-no-fukkatsu-m5580.jpg"},
				{"nome": "One Punch Man", "episodios": 100, thumb:"https://m.media-amazon.com/images/M/MV5BMzQxMzE5NzM2NV5BMl5BanBnXkFtZTgwMDQ4NTUyNzE@._V1_.jpg"},
				{"nome": "Pokemon", "episodios": 15,thumb:"https://pm1.narvii.com/6420/7413df4d0efdd558440c51ba2ca0bbf5371dd527_hq.jpg"},
				{"nome": "Steins Gate", "episodios": 8, thumb:"https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_UX182_CR0,0,182,268_AL_.jpg"},
				{"nome": "Zombieland Saga", "episodios": 8, thumb:"https://img1.ak.crunchyroll.com/i/spire4/fa152294500d068e6a0c19086dc000b21538634514_full.jpg"},

			],
			size: 0
		}
	}

	componentDidMount = () => {
		this.setState({size: Math.floor((this.state.animes.length)/3)})
	}

	render() {
		const size = this.state.size;
		const animes = this.state.animes;

		return(
			<div>
				<Topo/>
				<Propaganda/>
				<div className='container todo'>
					<Grid >
					<Col md={9}>
						<Row>
							<PageHeader name="Nome da Categoria"/>
						</Row>
						<Col md={4}>
							{animes.map((a, index) => {
								if(index < size){return(<AnimeByGenreBox nome={a.nome} episodios={a.episodios} thumb={a.thumb}/>)}
							})}
						</Col>
						<Col md={4}>
							{animes.map((a, index) => {
								if(index >= size && index < size*2){return(<AnimeByGenreBox nome={a.nome} episodios={a.episodios} thumb={a.thumb}/>)}
							})}
						</Col>
						<Col md={4}>
							{animes.map((a, index) => {
								if(index >= size*2){return(<AnimeByGenreBox nome={a.nome} episodios={a.episodios} thumb={a.thumb}/>)}
							})}
						</Col>
					</Col>
					<Col md={3}>
						<PageHeader small='PARCEIROS'/>
						espaço para anuncio
					</Col>
				</Grid>
				</div>
				
			</div>
		)
	}
}