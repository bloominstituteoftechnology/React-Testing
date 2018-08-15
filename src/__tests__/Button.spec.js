import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  let wrapper;
  beforeEach(() => {
  wrapper = shallow(<Button />);
});

  it('should render a name for each button', () => {
    wrapper.setProps({name: 'test'});
    expect(wrapper.text()).toEqual('test')
  });

 /* it('should render orange button when className is orange', () => {
    const button = wrapper.find('.component-button.orange');
    expect(button.prop('style')).toEqual({color: '#F5923E'} )
  });

  it('should render wide button when className is wide', () => {
    const button = wrapper.find('.component-button.wide');
    expect(button.prop('style')).toEqual({width: '50%'})
  });*/

});

//should render orange button when className is orange
//should render wide button when className is wide