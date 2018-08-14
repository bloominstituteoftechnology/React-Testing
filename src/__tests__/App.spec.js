import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render Display component', () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true)
  });

  it('should render Panel component', () => {
    expect(wrapper.containsMatchingElement(<Panel />)).toEqual(true)
  });
});

