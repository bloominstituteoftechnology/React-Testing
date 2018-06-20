import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';
import { TokenBucket } from 'limiter';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display value="hola caracola" />, div);
  });
  describe('Shallow tests', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Display />);
    });
    test('Should have two <div> elements', () => {
      // const wrapper = shallow(<Display />);
      expect(wrapper.find('div')).toHaveLength(2);
    });
  });
  test('Should render a prop called "value"', () => {
    const wrapper = shallow(<Display value="hola caracola" />);
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().children
    ).toBe('hola caracola');
  });
});
