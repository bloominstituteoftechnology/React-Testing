import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
});

//My Test Code
it('Return a "value" being passed', () => {
  const component1 = shallow(<Display value={"9"} />);
  const component2 = shallow(<Display value={"7"} />);

  expect(component1.contains(<div>9</div>)).toEqual(true);
  expect(component2.contains(<div>9</div>)).toEqual(false);
});