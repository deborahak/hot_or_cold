import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});
    // it('Can start a new game', () => {
    //     const wrapper = shallow(<Game />);
    //     wrapper.setState({
    //         guesses: [7, 8, 9],
    //         feedback: 'Excellent!',
    //         correctAnswer: -1 
    //     });
    //     wrapper.instance().newGame();
    //     expect(wrapper.state('guesses')).toEqual([]);
    //     expect(wrapper.state('feedback')).toEqual('Make your guess!');
    //     expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    //     expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    // });

    //     it('Can make guesses', () => {
    //     const wrapper = shallow(<Game />);
    //     wrapper.setState({
    //         correctAnswer: 100
    //     });

    //     wrapper.instance().guess(25);
    //     expect(wrapper.state('guesses')).toEqual([25]);
    //     expect(wrapper.state('feedback')).toEqual('Brrr...Ice Cold');

    //     wrapper.instance().guess(60);
    //     expect(wrapper.state('guesses')).toEqual([25, 60]);
    //     expect(wrapper.state('feedback')).toEqual('Rather Chilly!');

    //     wrapper.instance().guess(80);
    //     expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
    //     expect(wrapper.state('feedback')).toEqual('Warmer! Keep Going...');

    //     wrapper.instance().guess(95);
    //     expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
    //     expect(wrapper.state('feedback')).toEqual('Ouch! Scorching Hot!');

    //     wrapper.instance().guess(100);
    //     expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
    //     expect(wrapper.state('feedback')).toEqual('Hooray! You Got It, Smarty Pants!');
    // });
        
});






