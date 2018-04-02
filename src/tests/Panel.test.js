import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const component = shallow(<Panel component-panel />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  
  it('should return if component-display exits', () => {
    expect(component.find('.component-panel')).toHaveLength(1);
  });

  it('should return 5 children', () => {
    expect(component.find('.component-panel').children()).toHaveLength(5);
  });

  it('should return true for 19 buttons', () => {
    expect(component.find('Button')).toHaveLength(19);
  });
});