// import logo from './logo.svg';
// import Ping from './components/ping/ping'
import pingLogo from './assets/ping.jpg'
import './App.css';
import PingComponent from './components/pingComponent/PingComponent'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={pingLogo} className='Ping-logo' alt='Ping Logo' />
				<br/>
			<PingComponent />
			</header>
		</div>
	);
}

export default App;
