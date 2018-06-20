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
  it('should render a Display component', () => { 
    const app = shallow(<App />);

    const display = app.find('Display');

    expect(display.length).toEqual(1);

  })
  it('Should render a Panel component', () => { 
    const app = shallow(<App />);

    const display = app.find('Panel');

    expect(display.length).toEqual(1);
  })
});