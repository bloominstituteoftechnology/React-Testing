import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
//import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should have 19 buttons', () => {
    const component = shallow(<Panel />);
    expect(component.find('div').children().children().length).toEqual(19);
  });
  it('should return type Function', () => {
    const component = mount(<Panel clickHandler={()=>{}} />);
    expect(typeof(component.props().clickHandler)).toEqual('function');
  });
  // it('should have ...', () => {
  //   const component = shallow(<Panel />);
  //   // console.log(component);
  //   const button = component.find('Button');
  //   console.log(button.props());
  //   // expect(component.find(Foo).render().find('.in-foo')).to.have.length(1);
  // });
});