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
      shallow(<Button />);
  });

  it('renders display component', () => {
    const display = shallow(<Display/>);
    const divs = display.find('component-display');

    expect(divs.length).toEqual(1);
  })
});