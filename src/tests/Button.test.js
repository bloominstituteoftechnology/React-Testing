import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Button onButtonClick={handleClick} />)
 
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.called).to.equal(true);
  // });
  it('renders without crashing', () => {
    const component = shallow(<Button  />);
    const wrapper = shallow(<Button  />);
    expect(component.find('button').length).toEqual(1);
    console.log('These are the wrapper.TYPES of Button: ',wrapper.type());
    console.log('These are the wrapper.find of Button: ',wrapper.find('Button.propTypes'));
    console.log('These are the wrapper.state of Button: ',wrapper.state());
    console.log('These are the wrapper.PROPS of Button: ',wrapper.props().children);

    // ReactDOM.render(<Panel />, div);
  });
});