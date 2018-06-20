import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it.each([[Display], [Panel]])('Should have given components', comp => {
    const app = shallow(<App />);
    expect(app.find(comp)).toHaveLength(1);
  });
  test('Have Display', () => {
    const app = shallow(<App />);
    expect(app.find(Display)).toHaveLength(1);
  });
  test('Have Panel', () => {
    const app = shallow(<App />);
    expect(app.find(Panel).length).toEqual(1);
  });
  test();
});
