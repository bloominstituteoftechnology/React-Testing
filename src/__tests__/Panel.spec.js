import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';


Enzyme.configure({ adapter: new Adapter() });
let wrapper;

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should count the amount of buttons', () => {
    const wrapper = shallow(<Panel />);
    let count = 0;
    wrapper.find(Button).forEach(btn => btn ? count++ : null);
    expect(count).toBe(19);
  })
});
