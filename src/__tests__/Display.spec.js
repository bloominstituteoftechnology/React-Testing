import React from 'react';
import ReactDOM from 'react-dom';
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

// it('should return invalid input if divided by 0', () => {
//   const component = shallow(<Display />);
//   const app = shallow(<App />);
//   app.instance().handleClick('÷');
//   expect(component.state('total')).toEqual('0');
// })
