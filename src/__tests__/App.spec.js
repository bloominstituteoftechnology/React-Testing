import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have method to update state', () => {
    const component = shallow(<App />);
    component.instance().handleClick("3")
    expect(component.state('next')).toEqual("3");
    expect(component.state('total')).toEqual(null);
    expect(component.state('operation')).toBeNull();
  });
});

