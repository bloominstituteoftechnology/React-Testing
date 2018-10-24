import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';


describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('matches snapshot', ()=> {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have class component-panel', ()=> {
    const wrapper = shallow(<Panel />);
    const componentPanel = wrapper.find('div.component-panel');
    expect(componentPanel.length).toBe(1);
  });
});
