import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  const display = shallow(<Display />);
  it('renders without crashing', () => {
    expect(display).toHaveLength(1);
  });
  it('have one child component', () => {
    expect(display.find('div').children()).toHaveLength(1);
  })
});