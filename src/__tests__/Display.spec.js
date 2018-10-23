import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should match snapshot', () => {
  	const tree = renderer.create(<Display />).toJSON();
  	expect(tree).toMatchSnapshot();
  })

  it('should display prop value in view', () => {
  	const wrapper = shallow(<Display value='2'/>)
  	const elements = wrapper.find('div')
		expect(elements.at(1).text()).toEqual('2');
  })
});
