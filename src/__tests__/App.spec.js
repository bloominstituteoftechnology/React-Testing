import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('initial next is null', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.value).toBe(undefined);
  });
  it('initial operationw is null', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.value).toBe(undefined);
  });
});
