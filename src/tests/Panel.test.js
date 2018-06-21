import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  test('Must have 19 <Button />', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button')).toHaveLength(19);
  });
  test('Should have "handleClick" property', () => {
    const wrapper = shallow(<Panel />).instance();
    expect(wrapper.hasOwnProperty('handleClick')).toBeTruthy();
  });

});
