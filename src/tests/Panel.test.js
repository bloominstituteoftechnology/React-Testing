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
  it('should have 19 buttons on the panel', () => {
    const pan = shallow(<Panel />)
    expect(pan.find('Button')).toHaveLength(19);
    console.log('length', (pan.find('Button').length));
  });
  it(`renders a div with the className 'component-panel'`, () => {
    const component = shallow(<Panel />);
    expect(component.find('.component-panel')).toHaveLength(1);
  });
});