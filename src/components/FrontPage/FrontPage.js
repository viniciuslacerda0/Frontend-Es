import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import Axios from 'axios';
import Animes from './Animes'
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
            exampleItems: [],
						topAnimes: []
        }
        this.onChangePage = this.onChangePage.bind(this);
				this.atualizaTop = this.atualizaTop.bind(this);
	}

	 onChangePage(pageOfItems){
        this.setState({ pageOfItems: pageOfItems});
    }

    componentDidMount() {
        Axios.get('http://34.239.129.125/animes?sortBy=createdAt&order=desc')
        .then(response => this.setState({listAnimes:response.data.content.animes}))
        .then(response => this.setState({exampleItems: this.state.listAnimes}));

		Axios.get('http://34.239.129.125/animes?sortBy=name&order=asc')
        .then(res => this.setState({topAnimes:res.data.content.animes}))
        .then(()=> this.atualizaTop(this.state.topAnimes))
    }

		atualizaTop(list){
			var newlist = list.sort(function(a, b) {
  				return b.score - a.score;
				});
				return newlist
		}

	render() {
		return(
		<div>
				<Propaganda/>
				<div className='container todo'>

			<Grid >
				<Col md={9}>
					<Row>
						<PageHeader name='Últimos' small='lançamentos'/>
					</Row>
					<Row>
					<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
					<Animes list={this.state.pageOfItems}/>
					<br/> <br/>
					<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
					</Row>
				</Col>
				<Col md={3}>
					<PageHeader name='Top 10 animes'/>
                    <TopAnimes list={this.state.topAnimes}/>
				</Col>
			</Grid>
			</div>
			</div>
		)
	}


}
