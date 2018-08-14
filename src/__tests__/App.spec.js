import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should display value of 0 on default', () => {
    const app = shallow(<App/>);
    const instance = app.instance();
    expect(instance.state.total).toEqual('0')
  });
  it('should display null on default', () => {
    const app = shallow(<App/>);
    const instance = app.instance();
    expect(instance.state.next).toEqual(null)
  });
  it('should display null on default', () => {
    const app = shallow(<App/>);
    const instance = app.instance();
    expect(instance.state.operation).toEqual(null)
  });
  // it('should display a value passed as a prop', () => {
  //   const app = shallow(<App/>);
  //   const instance = app.instance();



  //   expect(instance.state.total).toEqual('2')
  // })




});
