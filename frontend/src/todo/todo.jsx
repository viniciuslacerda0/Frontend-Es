import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TopAnimes from './topAnimes'
import Animes from './animes'

import "../template/custom.css"

const URL = 'http://localhost:3001/api/todos'

export default class Todo extends Component{
    
    constructor(props){
        super(props)

        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)   
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMaskAsDone = this.handleMaskAsDone.bind(this)
        this.handleMaskAsPending = this.handleMaskAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        
        this.refresh()
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/i` : ''
        axios.get(`${URL}?sort=-visualizations${search}`)
             .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
             .then(resp => this.refresh(this.state.description))
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleMaskAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
             .then(resp => this.refresh(this.state.description))
    }

    handleMaskAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
             .then(resp => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    render(){
        return (
            <div className='container todo'>
                <div className='row'>
                    <div className='col-md-9'>
                        <PageHeader name='Ultimos' small='lancamentos' />
                        <Animes list={[ {name: 'owkakoaw', thumb: 'awkokowa', episode: 19},
                                        {name: 'owkakoaw', thumb: 'awkokowa', episode: 19},
                                        {name: 'owkakoaw', thumb: 'awkokowa', episode: 19},
                                        {name: 'owkakoaw', thumb: 'awkokowa', episode: 19},
                                        {name: 'owkakoaw', thumb: 'awkokowa', episode: 19},
                                    ]} />
                    </div>
                    <div className='testeTopAnimes col-md-3'>
                        <PageHeader name='Top' small='animes' />
                        <TopAnimes list={this.state.list} />
                    </div>
                </div>
            </div>
        )
    }
}