import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';


Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
   shallow(<Panel />);
  });

  it('should return all the divs', () => {
    const component = shallow(<Panel />);

    expect(component.find('div').children()).toHaveLength(24);
  });

  it('should return all the buttons', () => {
    const component = shallow(<Panel />);

    expect(component.find('Button')).toHaveLength(19);
  });

  it('should return panel-component', () => {
    const component = shallow(<Panel />);

    expect(component.find('.component-panel')).toHaveLength(1);
  })
});
