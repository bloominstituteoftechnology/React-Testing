import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });


describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />); // notice this only renders App and will not render any child components
  });

  it('should render exactly Panel component', () => {
    const component = shallow(<App />);
    expect(component.find('Panel')).toHaveLength(1)
  });
  it('should render Display component', () => {
    const component = shallow(<App />);
    expect(component.find('Display')).toHaveLength(1)
  })
});