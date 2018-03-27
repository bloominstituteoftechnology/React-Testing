import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it(`renders a div with the className 'component-panel'`, () => {
    const component = shallow(<Panel />);
    expect(component.find('.component-panel')).toHaveLength(1);
  });

  it(`renders 19 total buttons`, () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).toHaveLength(19);
  });
});
