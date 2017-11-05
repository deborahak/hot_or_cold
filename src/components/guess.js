import React from 'react';

export default class Guess extends React.Component {
		constructor(props) {
			super(props);
			this.state= {
				guess: ""
			};
			this.handleChange = this.handleChange.bind(this);
			this.onSubmit = this.onSubmit.bind(this);	
		}

		handleChange(event) {
			this.setState({
				guess: event.target.value
			});
		}

		onSubmit(event) { //event object collected fr ln 27
	        event.preventDefault();
	        console.log(this.state.guess);
	        const wildGuess = this.state.guess;
	        if (wildGuess) {
	            this.props.onAdd(wildGuess);
	        }
	        this.setState({
	        	guess: ""
	        });
    }

    render(){
	return(
		<form onSubmit={event => this.onSubmit(event)} >
			<input type="number" id="userGuess" maxLength="3" value={this.state.guess} onChange={this.handleChange} />
			<input type="submit" id="guessButton" name="submit" value="Guess" />
		</form>
		);
	}
}














