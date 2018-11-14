import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TopAnimes from './topAnimes'
import Animes from './animes'
import Pagination from './Pagination'

import "../template/custom.css"

const URL = 'http://localhost:3001/api/todos'

export default class Todo extends Component{

    
    constructor(props){
        var exampleItems = [ {name: 'owkakoaw', thumb: 'awkokowa', episode: 1},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 2},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 3},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 4},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 5},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 6},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 7},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 8},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 9},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 10},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 11},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 12},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 13},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 14},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 15},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 16},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 17},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 18},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 19},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 20},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 21},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 22},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 23},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 24},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 25},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 26},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 27},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 28},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 29},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 30},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 31},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 32},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 33},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 34},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 35},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 36},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 37},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 38},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 39},
        {name: 'owkakoaw', thumb: 'awkokowa', episode: 40},
    ];
        super(props)

        this.state = { description: '', list: [], pageOfItems: [], exampleItems: exampleItems }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)   
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMaskAsDone = this.handleMaskAsDone.bind(this)
        this.handleMaskAsPending = this.handleMaskAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.onChangePage = this.onChangePage.bind(this)

        
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

    onChangePage(pageOfItems){
        this.setState({ pageOfItems: pageOfItems});
    }

    render(){
        return (
            <div className='container todo'>
                <div className='row'>
                    <div className='col-md-9'>
                        <PageHeader name='Ultimos' small='lancamentos' />
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
                        <Animes list={this.state.pageOfItems} />
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
