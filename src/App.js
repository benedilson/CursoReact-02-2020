import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DadosPessoais from "./componentes/DadosPessoais";
import BotaoAcao from "./componentes/BotaoAcao";

class App extends Component {

	constructor(props) {
		super(props);
		console.log("Olaa! :D");
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React - Lets code togheter! :D</h1>
				</header>

				<DadosPessoais/>
				<br/>
				<BotaoAcao/>
			</div>
		);
	}
}

export default App;
