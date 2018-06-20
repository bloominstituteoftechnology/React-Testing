import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('only renders one button?', () => {
    const button = shallow(<Button />);
    const componentButton = button.find('.component-button')
    expect(componentButton.length).toEqual(1);
  });
  it('should execute handleClick', () => {
    const button = shallow(<Button />);
    button.simulate('click');
  })
  it('handles props correctly', () => {
    const button = shallow(<Button />);
    


  })
});
