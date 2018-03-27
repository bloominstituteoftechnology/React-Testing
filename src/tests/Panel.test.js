import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
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
  it('should have a `handleClick` event handler', () => {
    const clickSpy = sinon.spy();
    const component = shallow(<Panel clickHandler={clickSpy} />);
    component.find("Button").last().simulate('click');
   // expect(component.instance().clickHandler.toBeDefined());
    expect(clickSpy.calledOnce).toBeTruthy;
   }); 
  it('should render a div with a `component-panel` class', () => {
    const component = shallow(<Panel />);
    expect(component.find('div.component-panel')).toHaveLength(1);
  });
  it ('should render 19 buttons', () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).toHaveLength(19);
  })
});
