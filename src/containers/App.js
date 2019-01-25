import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import './css/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) =>{//Tells what state the component needs to listen for and send down as props
		// console.log(state);

	return {
		// searchFieldx: state.searchField //Because we only have one reducer we are working with now
		//Returns the properties set in the reducers that this component is concerned with
		searchFieldx: state.searchRobots.searchField, 
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) =>{//Tells what actions that this component is interested in
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		// On search, trigger the setSearch fxn which returns the type of action and the payload
		// then dispatch it to the reducer which makes the relevant change and returns the
		// the parts of the updated part of the state
		// Now Provider uses mapStateToProps to determine the parts of the state it should send back 
		// to this component as props
		onRequestRobots: () => requestRobots(dispatch)//This is an async fxn hence the syntax
	}
}

class App extends Component{	

	render(){
		const { searchFieldx, onSearchChange, isPending, robots } = this.props;//These were gotten through redux's connect
		const filtered = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchFieldx.toLowerCase());
		})
		if(!isPending){
			return (
				<div className = 'tc'>
					<h1 className="f1">Robofriends</h1>
					<SearchBox searchChange = {onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots = {filtered}/>
						</ErrorBoundary>
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
		this.props.onRequestRobots();
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect it a higher order fxn, meaning it returns a fuction
// This in turn runs with (App) as a parameter

/*
Connect sends the states and actions that this component is interested in to the Provider in the parent
component which in turn passes it into the store and generates the appropriate values which it sends back
to this component as props
*/