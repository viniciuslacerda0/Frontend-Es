import React, { Component } from 'react';
import './animePage.css'
import Axios from 'axios'

export default class RatingBar extends Component{
    constructor(props) {
		super(props);
		this.state = {
            stars: 0,
            animeID: this.props.animeID,
            token: sessionStorage.getItem('token'),
            evaluationID: ""
        }
        this.clickone = this.clickone.bind(this)
        Axios.get(`http://34.239.129.125/me/animes/${this.state.animeID}/evaluations`, {
          headers: {
            authorization: `Bearer ${this.state.token}`
          }
        }).then((res) => res.data.content.evaluations[0]).then((response) => response === undefined ? this.setState({stars: 0}) : this.setState({stars: response.score, evaluationID: response.id})).catch(() => this.setState({stars: 0}))
    }

    clickone(e,n){
        e.preventDefault();
        var data = {}
        data.score = n;
        var token = this.state.token
        if(this.state.stars === 0){
          Axios.post(`http://34.239.129.125/animes/${this.state.animeID}/evaluations`, data, {
            headers: {
              authorization: `Bearer ${token}`
            }
          }).then(() => this.setState({stars: n})).catch(() => this.setState({stars: 0}))
        }
        else{
          console.log(data)
          Axios.put(`http://34.239.129.125/evaluations/${this.state.evaluationID}`, data, {
            headers : {
              authorization: `Bearer ${token}`
            }
          }).then((res) => res.data).then(() => this.setState({stars: n})).catch(() => alert("error"))
        }
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
