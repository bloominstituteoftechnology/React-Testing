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
  it("renders the value given", () => {
    const wrapper = shallow(<Display value={"Max & Mike"} />);
    expect(wrapper.contains(
      <div className="component-display">
            <div>
                Max & Mike
            </div>
        </div>
    ))
  })
});