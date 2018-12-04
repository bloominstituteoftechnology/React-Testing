import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('snapshot of app component', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot(); //SNAPSHOT
  });

  it('div with className component-app should exist', () => {
    const app = shallow(<App />);
    const div = app.find('.component-app');
    expect(div.exists()).toEqual(true);
  });
});
