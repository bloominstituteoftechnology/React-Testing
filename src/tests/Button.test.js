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
  it('should render a button tag', () => {
    const component = shallow(<Button />);
    expect(component.find('button').length).toBe(1);
  });
  it('should get a name prop', () => {
    const component = shallow(<Button name="AC"/>);
    console.log(component.props());
    expect(component.props().children.props.children).toEqual('AC');
  });
});