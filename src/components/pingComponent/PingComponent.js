import React, { Component } from 'react';
import './PingComponent.css';
import ping from 'web-pingjs';

class PingComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pingValue: '',
		};
		this.pingClick = this.pingClick.bind(this)
	}


	pingClick = ()=>{
		let that = this
		ping('https://google.com/')
			.then(function (data) {
				console.log('Ping time was ' + String(data) + ' ms');
				that.setState({pingValue: data})
			})
			.catch(function (err) {
				console.error('Could not ping remote URL', err);
			});
	}

	render() {
		return (
			<div>
				<button className='ping-button' onClick={this.pingClick}>
					PING
				</button>
				<h1>{this.state.pingValue}</h1>
			</div>
		);
	}
}

export default PingComponent;
