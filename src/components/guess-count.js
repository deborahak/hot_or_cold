import React from 'react';

//the number of guesses the player has made
export default function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}
