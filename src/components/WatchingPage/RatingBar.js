import React, { Component } from 'react';
import './WatchingPage.css'

export default class RatingBar extends Component{
    constructor(props) {
		super(props);
		this.state = {
            stars: 0
        }
        this.clickone = this.clickone.bind(this)

    }
    
    clickone(e,n){
        e.preventDefault();
        this.setState({stars: n});
        console.log(this.state.stars);
    }

    render(){
        return(
            <span className="rating" style={{"padding":"18px 10px 10px 10px", "textAlign":"center"}}>
                {this.state.stars >= 1 ?                
                <i className="fas fa-star fa-2x" style={{color: "#feb236"}} onClick={(e) => {this.clickone(e,1)}}/> :
                <i className="far fa-star fa-2x" onClick={(e) => {this.clickone(e,1)}}/>}  

                {this.state.stars >= 2 ?     
                <i className="fas fa-star fa-2x" style={{color: "#feb236"}} onClick={(e) => {this.clickone(e,2)}}/> :
                <i className="far fa-star fa-2x" onClick={(e) => {this.clickone(e,2)}}/> }

                {this.state.stars >= 3 ?
                <i className="fas fa-star fa-2x" style={{color: "#feb236"}} onClick={(e) => {this.clickone(e,3)}}/> :
                <i className="far fa-star fa-2x" onClick={(e) => {this.clickone(e,3)}}/> }

                {this.state.stars >= 4 ?
                <i className="fas fa-star fa-2x" style={{color: "#feb236"}} onClick={(e) => {this.clickone(e,4)}}/> :
                <i className="far fa-star fa-2x" onClick={(e) => {this.clickone(e,4)}}/> }

                {this.state.stars >= 5 ?
                <i className="fas fa-star fa-2x" style={{color: "#feb236"}} onClick={(e) => {this.clickone(e,5)}}/> :
                <i className="far fa-star fa-2x" onClick={(e) => {this.clickone(e,5)}}/> }
            </span>
        )
    }
}