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
		var listAnimes = []

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
