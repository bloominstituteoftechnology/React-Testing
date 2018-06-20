import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('Renders without crashing', () => {
    shallow(<Panel />);
  });

  it('Renders several buttons.', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(Button).length).toEqual(19);
  });
});