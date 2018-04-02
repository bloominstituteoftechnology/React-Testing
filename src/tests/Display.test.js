import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  const component = shallow(<Display />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should return if component-display exits', () => {
    expect(component.find('.component-display')).toHaveLength(1);
  });

  it('should return 1 child', () => {
    expect(component.find('.component-display').children()).toHaveLength(1);
  });

  it('should contain a div', () => {
    expect(component.contains(<div></div>)).toEqual(true);
  });

  it('should return that it\'s children have a div', () => {
    expect(component.children().contains(<div></div>)).toEqual(true);
  });
});