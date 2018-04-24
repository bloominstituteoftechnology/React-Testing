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
    const component = shallow(<Display value={"Ronnie"} />);
    expect(component.contains(
      <div className="component-display">
            <div>
                Ronnie
            </div>
        </div>
    ))
  })
});