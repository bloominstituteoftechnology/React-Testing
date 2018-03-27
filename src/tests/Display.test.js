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
  it('should render something', () => {
    const component = shallow(<Display /> );
    expect(component.find('div').length).toBeGreaterThanOrEqual(1);
  });
  it('should display the correct value that is passed into the component', () => {
    const component = shallow(<Display value={'252525'} />);
    const result = <div>252525</div>;
    expect (component.props('value').children).toEqual(result);
  });
  
});