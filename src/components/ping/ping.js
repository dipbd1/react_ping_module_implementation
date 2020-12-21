import React, { Component } from 'react';
import Arp from '.././arp/arp'

class Ping extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1>So, this is a Component</h1>
				<h2>this is {this.props.data}</h2>
				<Arp data = "59"/>
			</div>
		);
	}
}

export default Ping;
