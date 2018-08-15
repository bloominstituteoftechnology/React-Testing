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

  let wrapper;
  beforeEach(() => {
  wrapper = shallow(<Display />);
});

  it('should render a value to display', () => {
    wrapper.setProps({value: 'test'});
    expect(wrapper.text()).toEqual('test')
  });

});


//should render value to display
//should display 0 when no value is given