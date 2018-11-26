import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import '../Styles/styles.css'
import ShowAnimes from './ShowAnimes'
import Propaganda from '../Template/Propaganda'
import Pagination from '../Pagination/Pagination'
import Axios from 'axios'

class AnimeList extends React.Component {

	constructor(props){
		super(props);
		var listAnimes = [{name: "nanatsu no taizai", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "naruto", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "dragon ball",  thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" }]

        this.onChangePage = this.onChangePage.bind(this);

    this.state = { list: [], pageOfItems: listAnimes, exampleItems: listAnimes }

		Axios.get('http://34.239.129.125/animes').then(response => response.data.content.animes).then(res => this.setState({pageOfItems: res}));


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
					<Col md={12}>
						<Row>
						    <ShowAnimes list={this.state.pageOfItems}/>
                    	    <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
						</Row>
					</Col>
				</Grid>
			</div>
		</div>
		)
	}


}

export default AnimeList
