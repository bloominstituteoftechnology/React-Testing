import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';



describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('should match snapshot', ()=> {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display component-display', ()=> {
    const wrapper = shallow(<Display />);
    const display = wrapper.find('div.component-display');
    expect(display.length).toBe(1);
  });

  it('should have a prop of value', ()=> {
    const wrapper = shallow(<Display value={undefined}/>);
    expect(wrapper.props().value).toEqual(undefined);
  });
  
});
