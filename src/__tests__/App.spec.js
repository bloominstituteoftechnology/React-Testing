import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

// component imports

import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = (shallow(<App />));
const instance = wrapper.instance();

describe('<App /> matching and component tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('render should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<App /> should have className called component-app', () => {
    const elements = wrapper.find('.component-app');
    expect(elements.length).toBe(1);
  });

  test('application state should be null', () => {
    expect(instance.state.operation).toBe(null);
  });

  // will add some more when MVP is complete, keeping tests basic in the interest of time
});
