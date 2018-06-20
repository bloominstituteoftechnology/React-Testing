import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
  it ("render components", () => {
    const wrap = shallow(<App />);
    expect(wrap.find(Panel).length).toEqual(1)
    expect(wrap.find(Display).length).toEqual(1)
  })
});