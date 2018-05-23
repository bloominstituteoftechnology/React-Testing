import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should render a parent div tag with a class of component-panel', () => {
    const component = shallow(<Panel />);
    expect(component
        .find('div')
        .first()
      .hasClass('component-panel')).toEqual(true);
  });

  it('should render all buttons', () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).toHaveLength(19);
  });

  it('should call the clickHandler function', () => {
    const fn = jest.fn();
    const component = mount(<Panel clickHandler={fn} />);
    component.find(`[name='9'] button`).simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});