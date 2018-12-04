import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  }); // should render without crashing

  it('should render matched snapshots', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  }); // should render matched snapshots

  it('should render <div className="component-app">', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('.component-app');
    expect(elements.length).toBe(1);
  }); // should render <div className="component-app

}); // <App />
