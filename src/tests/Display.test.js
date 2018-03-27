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
  it('should render a div class with component-display', () => {
    const component = shallow(<Display />);
    expect(component.find('.component-display')).toHaveLength(1);
  });
  it('should render value in a div', () => {
    const component = shallow(<Display value={'1'} />);
    expect(component.contains(<div>1</div>)).toEqual(true);
  });
});