import React from "react";

export default class DadosPessoais extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nome:  "Rodrigo Tessarollo Neves",
			cpf: "02687403130",
			data: "16/04/1989",
			dataAtual: new Date()
		};
	}

	render() {
		return (
			<div>
				<h5>Dados Pessoais:</h5>
				<p><strong>Nome:</strong> {this.state.nome}</p>
				<p><strong>CPF:</strong> {this.state.cpf}</p>
				<p><strong>Data Nascrimento:</strong> {this.state.data}</p>

				<p><strong>A data atual é:</strong> {this.state.dataAtual.toDateString()}</p>
			</div>
		);
	}
}