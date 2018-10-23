import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';
import renderer from 'react-test-renderer';

describe('<Button />', () => {

  //make sure it works
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  //see if it has been changed
  it('should match snapshot', () => {
  	const tree = renderer.create(<Button />).toJSON();
  	expect(tree).toMatchSnapshot();
  })

  //should add orange class to list if orange=true on props
  it('should add orange to class list if on props', () => {
    const wrapper = shallow(<Button orange={true} />)
    expect(wrapper.hasClass('orange')).toBe(true);
  })

  //should add wide class to list if wide=true on props
  it('should add wide to class list if on props', () => {
  	const wrapper = shallow(<Button wide={true} />)
  	expect(wrapper.hasClass('wide')).toBe(true);
  })

});