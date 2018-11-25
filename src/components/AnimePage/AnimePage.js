import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import '../Styles/styles.css'
import Anime from '../AnimePage/Anime'
import Topo from '../Template/Topo'
import Propaganda from '../Template/Propaganda'
import PageHeader from '../Template/PageHeader'
import Pagination from '../Pagination/Pagination'

export default class AnimePage extends Component {

        constructor(props){
		super(props);
		var listAnimes = [{name: "nanatsu no taizai", episode: 1, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
                {name: "naruto", episode: 2, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
                {name: "dragon ball", episode: 3, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
                {name: "fulmmetal", episode: 4, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
                {name: "fulmmetal", episode: 5, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
                {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },]

                this.onChangePage = this.onChangePage.bind(this);

                this.state = { list: [], pageOfItems: [], exampleItems: listAnimes }

	}

	onChangePage(pageOfItems){
                this.setState({ pageOfItems: pageOfItems});
    }


	render() {
		return(
		<div>
				<Propaganda/>
				<div className='container todo'>
				
			<Grid >
				<Col md={9}>
					<Row>
					        <Anime list={this.state.pageOfItems}/>
                            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
					</Row>
				</Col>
				<Col md={3}>
					<PageHeader name='Top anime'/>
				</Col>
			</Grid>
			</div>
			</div>
		)
	}


}

export default AnimePage;
