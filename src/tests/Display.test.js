import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should display value of props', () => {
    const component = shallow(<Display value={'3'}/>);
    expect(component.find('value')).toBeTruthy();
  })
  it('should display value of props', () => {
    const component = shallow(<Display />);
    expect(component.find('div')).toHaveLength(2)  
  });
});