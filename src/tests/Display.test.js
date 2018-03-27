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
  // check if component renders div with class 'component-display'
  // check if component renders value passed in
  it('should render a div with a `component-display` class', () => {
    const component = shallow(<Display />);
    expect(component.find('div.component-display')).toHaveLength(1);
  });
  it('should render a value passed into the component', () => {
    const component = shallow(<Display value = {'8'} />);
    expect(component.contains(
      <div>
        8
        </div>
    )).toEqual(true);
  });
});