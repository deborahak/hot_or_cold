import React from 'react';
import {shallow, mount} from 'enzyme';

import Guess from './guess';

describe('<Guess />', () => {
	it('Renders without crashing', () => {
		shallow(<Guess />);
	});
})


