import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

// describe('<Display />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Display />, div);
//   });
// });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />)
  });
});

describe('<Display />', () => {
  it('renders with provided value to display', () => {
    const expected = '3';

    const display = shallow(<Display value={expected} />)

    const div = display.find('.component-display')

    expect(div.text()).toEqual(expected)

  });
});