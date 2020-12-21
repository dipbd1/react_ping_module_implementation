import React, { Component } from 'react';

class Arp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	UNSAFE_componentWillMount(){
		if (this.props.data) {
			this.setState({ value: this.props.data});
			console.log(this.props.data);
		}
	}

	render() {
		return (
			<div>
				<h1>Data from Ping {this.state.value}</h1>
			</div>
		);
	}
}

export default Arp;
