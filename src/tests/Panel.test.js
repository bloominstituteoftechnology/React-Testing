import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should render the buttons', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(Button )).toHaveLength(19);
  });
});




it('should render children when passed in', () => {
  const wrapper = shallow((
    <MyComponent>
      <div className="unique" />
    </MyComponent>
  ));
  expect(wrapper.contains(<div className="unique" />)).to.equal(true);
});