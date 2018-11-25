import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import Axios from 'axios';
import Animes from './Animes'
import Topo from '../Template/Topo'
import TopAnimes from '../Template/TopAnimes'
import Propaganda from '../Template/Propaganda'
import PageHeader from '../Template/PageHeader'
import Pagination from '../Pagination/Pagination'

export default class FrontPage extends Component {

	constructor(props){
		super(props);
        this.state = { 
            listAnimes: [], 
            pageOfItems: [], 
            exampleItems: [] 
        }
        this.onChangePage = this.onChangePage.bind(this);
	}

	 onChangePage(pageOfItems){
        this.setState({ pageOfItems: pageOfItems});
    }

    componentDidMount() {
        Axios.get('http://34.239.129.125/animes')
        .then(response => this.setState({listAnimes:response.data.content.animes}))
        .then(response => this.setState({exampleItems: this.state.listAnimes}))

    }

	render() {
		return(
		<div>
				<Propaganda/>
				<div className='container todo'>
				
			<Grid >
				<Col md={9}>
					<Row>
						<PageHeader name='Ultimos' small='lancamentos'/>
					</Row>
					<Row>
					<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
					<Animes list={this.state.pageOfItems}/>
					</Row>
				</Col>
				<Col md={3}>
					<PageHeader name='Top animes'/>
                    <TopAnimes/>
				</Col>
			</Grid>
			</div>
			</div>
		)
	}


}
