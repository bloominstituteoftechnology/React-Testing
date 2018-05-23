import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  // it('counter wrapper',()=>{
  //   const wrapper =shallow(<App/>);
  //   let counterWrapper = wrapper.find();

  //   expect(counterWrapper.props().counter).toEqual(44)
  // })
});