import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('renders an empty div on initial load', () => {
    const props = { value: '0' };

    const display = shallow(<Display {...props} />);
    const value = display.find('.component-display').text()

    expect(value).toEqual('0');
  });
});
