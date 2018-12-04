import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('snapshot of display', () => {
    const tree = renderer.create(<Display />);
    expect(tree).toMatchSnapshot();
  });

  it('component-display exists', () => {
    const display = shallow(<Display />);
    const div = display.find('.component-display');
    expect(div.exists()).toBe(true);
  });
});
