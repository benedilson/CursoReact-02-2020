import React from "react";

const styles = {
	button: (color) => ({
		padding: 20,
		backgroundColor: color || "blue",
		color: "white",
		fontSize: 20
	})
};

const BotaoAcao = (props) => {
	return (
		<button style={styles.button(props.color)}  className="botaoBoladao" onClick={() => {
			console.log("Enviando conteudo...");
			alert("Enviando conteudo...");
		}}>
			Botao de Envio
		</button>
	);
};

export default BotaoAcao;