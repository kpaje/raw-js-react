const Pet = ({ name, animal, breed }) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, name),
		React.createElement("h2", {}, animal),
		React.createElement("h2", {}, breed)
	]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			name: "Oscar",
			animal: "Dog",
			breed: "Maltese"
		}),
		React.createElement(Pet, {
			name: "Bellamie",
			animal: "Dog",
			breed: "Yorkie"
		}),
		React.createElement(Pet, {
			name: "Lucky",
			animal: "Dog",
			breed: "Shepard"
		})
	]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
