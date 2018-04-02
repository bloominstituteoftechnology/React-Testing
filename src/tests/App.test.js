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
  it('mounts a component', () => {
    function Foo() {
      return (
        <div>
          <p>hello</p>
        </div>
      );
    };
    const component = shallow(< Foo/>);
  });
  it('has state', () => {
    const component = shallow(< App/>);
    expect(component.state().total).toEqual(null);
  });
});
