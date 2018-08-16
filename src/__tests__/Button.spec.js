import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  let wrapper;
  beforeEach(() => {
  wrapper = shallow(<Button />);
});

  it('should render a name for each button', () => {
    wrapper.setProps({name: 'test'});
    expect(wrapper.text()).toEqual('test')
  });

  describe('Asynchronous tests', () => {  
    it('async with async/await', async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    })
  });
});
