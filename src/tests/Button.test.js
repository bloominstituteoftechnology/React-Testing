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
  })

  it('should be orange when props.orange is true', () => {
    const component = shallow(<Button orange />);
    expect(component.find('.orange').length).toBe(1);
  })

  it('should be wide when props.wide is true', () => {
    const component = shallow(<Button wide />);
    expect(component.find('.wide').length).toBe(1);
  })

  it('should display props.name on the button', () => {
    const component = shallow(<Button name='button' />);
    expect(component.find('button').text()).toContain('button');
  })

});