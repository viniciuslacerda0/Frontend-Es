import React from 'react';

import './admin.css'


export default class OptionBox extends React.Component {


	render() {
		return(
			<div className="box">
				<div className="icon"><i className={this.props.icon}></i></div>
				{this.props.option}
			</div>
		)
	}



}