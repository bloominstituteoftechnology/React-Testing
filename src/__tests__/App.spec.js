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
describe('Render', () => {
  it('renders component', () => {
    const app = shallow(<App/>);
    const componentApp = app.find('.component-app');
    expect(componentApp.length).toEqual(1);
  });
  it('renders Display', () => {
    const app = shallow(<App/>);
    const display = app.find('Display');
    expect(display.length).toEqual(1);
  });
  it('renders Panel', () => {
    const app = shallow(<App/>);
    const panel = app.find('Panel');
    expect(panel.length).toEqual(1);
  })
});
