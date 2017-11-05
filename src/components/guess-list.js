import React from 'react';

//lists the guesses the player has made
export default function GuessList(props) {
    const guesses = props.value.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};
