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
});

describe('Div classname component app exists', () => {
  const app = shallow(<App />)
  it('causes no errors when rendering', () => {
    const div = app.find('component-app');
  })
})

describe("App's state is set", () => {
  const app = shallow(<App />)
  const instance = app.instance();
  it('has total working', () => {
    expect(instance.state.total).toEqual('0');
  })
  it('value of next is null', () => {
    expect(instance.state.next).toEqual(null);
  })
  it('value of operation is null', () => {
    expect(instance.state.operation).toEqual(null);
  })
})

