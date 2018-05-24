import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should not differ from snapshot', () => {
    let props = { name: 4, orange: false, wide: false };
    let element = shallow(<Button />);
    expect(element).toMatchSnapshot();
  })

  it('should call clickHandler function with specified button name', () => {
    let props = { name: '4' };
    const component = shallow(<Button />);
    const instance = component.instance();
    const button = component.find('.component-button');
    // expect(button.props.name).toEqual(4);
  })
});