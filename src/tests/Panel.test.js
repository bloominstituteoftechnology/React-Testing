import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper).toHaveLength(1);
  });
  it('returns className .component-panel with five children', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.component-panel').children()).toHaveLength(5);
  });
  // study differences between above and below blocks, note similar reference location
  it("returns className .component-panel's divs & buttons", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div').children()).toHaveLength(24);
  });
});
