import React from 'react';

import Hint from './hint';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import Guess from './guess';
import Reset from './reset';
import Faqs from './faqs';

//the particulars of the game are described below: math, entries, etc

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			user_guess: [],
			rightAnswer: Math.floor(Math.random() * 100) + 1,
			feedback: 'Pick a number!',
			count: 0
		};
		console.log(this.state.rightAnswer);
	}

	//all functions will go here
	newGame() {
		this.setState({
			user_guess: [],
			rightAnswer: Math.floor(Math.random() * 100) + 1,
			feedback: 'Pick a number!'
		});
	} 

	pickNum(guess) {
		guess = parseInt(guess, 10);
		console.log(guess);
		if (isNaN(guess)) {
			this.setState({
				feedback: 'You must enter a valid number'
			});
			return;
		}

		const distance = Math.abs(guess - this.state.rightAnswer);

		let feedback;

		if (distance >= 40) {
			feedback = 'Brrr...Ice Cold';
		}
		else if (distance >= 25) {
			feedback = 'Rather Chilly!';
		}
		else if (distance >= 10) {
			feedback = 'Warmer! Keep Going...';
		}
		else if (distance >= 1) {
			feedback = 'Ouch! Scorching Hot!';
		}
		else {
			feedback = 'Hooray! You Got It, Smarty Pants!';
		}

		this.setState({ 
			feedback,
			user_guess: [...this.state.user_guess, guess],
		});
		this.setState((prevState, props) => ({
			count: prevState.count +1
		}));

	}

	render(){
		//all my constants will go here
		return(
			//<div></div>
			<div className="container">
				<div className="top_nav" >
					<Faqs />
					<Reset onClick={this.reset} text={this.state.resetApp} />
				</div>
				<div className="main">
					<div className="app-title">
						<h1>Arctic Blast or Hell Fire</h1>
					</div>
				</div>
				<div>
					<Guess onAdd={(pickNum) => this.pickNum(pickNum)} />
				</div>
				<div>
					<Hint feedback={this.state.feedback} />
				</div>
				<div> 
					<GuessCount count={this.state.count} />
				</div>

				<div>
					<GuessList value={this.state.user_guess} />
				</div>
			</div>
			);
		
	}

}


