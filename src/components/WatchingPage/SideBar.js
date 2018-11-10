import React from 'react';
import {Panel} from 'react-bootstrap';
import './WatchingPage.css'


export default class SideBar extends React.Component {



	render() {
		return (
			<div className="sidebar">
				<Panel><h2>Temporada {this.props.temporada}</h2></Panel>
			</div>
		)
	}


}