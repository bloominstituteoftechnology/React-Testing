import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('should render an orange button ', () => {
    const props = {orange: true}
    const button = shallow(<Button {...props} />);
    expect(button.hasClass('orange')).toEqual(true)
  })

  it('should render a wide button ', () => {
    const props = { wide: true}
    const button = shallow(<Button {...props} />);
    expect(button.hasClass('wide')).toEqual(true)
  })

  it('should have a handleClick function', () => {
    const button = shallow(<Button />);
    const instance = button.instance();
    expect(typeof(instance.handleClick)).toEqual('function');
  })

  

});