import React from 'react';
import './App.css';
import NameForm from './NameForm';
import Home from './Home';

class App extends React.Component {
	constructor(){
		super();
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleNameSubmit = this.handleNameSubmit.bind(this);
		this.state = {data: '',
						name: undefined};
	};

	handleNameChange(e) {
		this.setState({data: e.target.value});
	};

	handleNameSubmit(e) {
		e.preventDefault();
		this.setState({name: this.state.data});
	};

	render() {
		return (
			<div className='App'>
				<NameForm name={this.state.name}
							data={this.state.data}
							handleNameChange={this.handleNameChange}
							handleNameSubmit={this.handleNameSubmit} />
				{this.state.name &&
					<Home name={this.state.name} />}
			</div>
		)
	}
};

export default App;
