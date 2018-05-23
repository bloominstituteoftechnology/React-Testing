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

  it('should render a button tag as a child of a div tag', () => {
    const component = shallow(<Button />);
    expect(component.find('div').children('button')).toHaveLength(1);
  });

  it('should render the proper class names', () => {
    const component = shallow(<Button orange/>);
    const component2 = shallow(<Button wide />);    
    expect(component.find('.orange')).toHaveLength(1);
    expect(component2.find('.wide')).toHaveLength(1);    
  });

  it('should call the clickHandler function', () => {
    const fn = jest.fn();
    const component = shallow(<Button clickHandler={fn}/>);
    component.find('button').simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('renders the individual buttons with their text correctly', () => {
    const component = shallow(<Button name='button 1'/>);
    expect(component.find('button').text()).toEqual('button 1')
  })
});