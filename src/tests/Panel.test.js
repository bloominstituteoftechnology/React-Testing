import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('renders without crashing', () => {
    const component = shallow(<Panel />);
    expect(component.find('div').length).toBe(6)
    // ReactDOM.render(<Panel />, div);
  });
  it('renders without crashing', () => {
    const component = shallow(<Panel  />);
    const wrapper = shallow(<Panel  />);
    expect(component.find('Button').length).toEqual(19);
    // console.log('These are the wrapper.TYPES of Panel: ',wrapper.type());
    // console.log('These are the wrapper.find of Panel: ',wrapper.find('Panel.propTypes'));
    // console.log('These are the wrapper.state of Panel: ',wrapper.state());
    // console.log('These are the wrapper.PROPS of Panel: ',wrapper.props().children);

    // ReactDOM.render(<Panel />, div);
  });
  it('renders without crashing', () => {
    let props = { total: '0', next: null, operation: null};
    const component = shallow(<Panel {...props} />);
    expect(component).toMatchSnapshot();
    // console.log('These are the component.PROPS of Panel: ',component.props().children);
    console.log('component toMatchsSnapshot', expect(component).toMatchSnapshot())
    // ReactDOM.render(<Panel />, div);
  });

  // it('renders without crashing', () => {
  //   const wrapper = shallow(<Panel  />);
  //   console.log(expect(wrapper.find('Button').type().to.equal('func')));
  //   // ReactDOM.render(<Panel />, div);
  // });

  // const onButtonClick = sinon.spy();
  // const wrapper = shallow(<Panel onButtonClick={this.handleClick("2")} />);
  // wrapper.find('clickHandler').simulate('click');
  // expect(onButtonClick.calledOnce).to.equal(true);
  // console.log('Display component, expect(wrapper.type())',expect(wrapper.type()))
  // expect(wrapper.find('.component-panel').type()).to.equal('div');
  // it('Should click the button 3', () => {
  //   const component = shallow(<Panel />);
  //   const instance = component.instance();

  //   instance.handleClick('3');
  //   expect(instance.state.handleClick).toEqual('3')
  // })
});