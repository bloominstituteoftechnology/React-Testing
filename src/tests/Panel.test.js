import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const panel = shallow(<Panel />);
  it('renders without crashing', () => {
    expect(panel).toHaveLength(1);
  });
  it('have 5 child divs', () => {
    expect(panel.find('div.component-panel').children()).toHaveLength(5);
  })
  it('have 19 button components', () => {
    expect(panel.find('Button')).toHaveLength(19);
  })
});