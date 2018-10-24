import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('should match snapshot', ()=> {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display button', ()=> {
    const wrapper = shallow(<Button />);
    const display = wrapper.find('button');
    expect(display.length).toBe(1);
  });

  it('should have a class component-button', ()=> {
    const wrapper = shallow(<Button />);
    const display = wrapper.find('.component-button');
    expect(display.length).toBe(1);
  });
  
});
