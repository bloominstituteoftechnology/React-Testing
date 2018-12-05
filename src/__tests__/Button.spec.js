import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

// 	render() {
// 		const classNames = [
// 				'component-button',
// 				this.props.orange ? 'orange' : '',
// 				this.props.wide ? 'wide' : '',
// 		];
// 		return (
// 				<div className={classNames.join(' ').trim()}>
// 						<button onClick={this.handleClick}>
// 								{this.props.name}
// 						</button>
// 				</div>
// 		);
// }

	it('renders a button with a div with a component-button class', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div.component-button').length).toBe(1)
	});
});

// <button onClick={this.toggle} className='toggle-btn'>Toggle</button>
