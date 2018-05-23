import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render two div tags', () => {
    const component = shallow(<Display />);
    expect(component.find('div')).toHaveLength(2);
  })

  it('should render a parent div tag with a class of component-display', () => {
    const component = shallow(<Display />);
    expect(component.find('div').first().hasClass('component-display')).toEqual(true); 
  })

  it('should render a secondary div tag', () => {
    const component = shallow(<Display />);
    expect(component.find('.component-display').children('div')).toHaveLength(1);
  })

  it('renders the value correctly', () => {
    const component = shallow(<Display value='10' />);
    expect(component
        .find('.component-display')
        .children('div')
        .text()).toEqual('10');
  })
});