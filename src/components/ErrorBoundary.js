import React, { Component } from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(){
		this.setState({hasError: true})
	}

	render(){
		return this.state.hasError ? <h1>Oops, something bugs here.</h1> : this.props.children
	}
}

export default ErrorBoundary