import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('renders the correct number of buttons', () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).toHaveLength(19);
  });
  it('renders the right number of rows', () => {
    const component = shallow(<Panel />);
    expect(component.children().length).toEqual(5);
  });
  it('renders a wide 0 button in the bottom left row', () => {
    const component = shallow(<Panel />);
    expect(
      component
        .childAt(4)
        .childAt(0)
        .props().wide,
    ).toEqual(true);
  });
});
