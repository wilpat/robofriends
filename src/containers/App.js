import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './css/App.css';
import Scroll from '../components/Scroll';

class App extends Component{

	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield : ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}
	

	render(){
		const {robots, searchfield} = this.state;
		const filtered = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(robots.length){
			return (
				<div className = 'tc'>
					<h1 className="f1">Robofriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots = {filtered}/>
					</Scroll>
				</div>
			)
		}else{
			return(
				<div className = 'tc'>
					<h1>Loading</h1>
				</div>
			)
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(robots => this.setState({robots}))
	}
	
}

export default App;