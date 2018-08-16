import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />)
  });
  it('has 10 unique single digit required for a calculator', () => {
    const root = shallow(<Panel />);
    const regex = /\d/;
    const numbers = {};
    root.findWhere(component => {
      const propName = component.prop('name');
      if(regex.test(propName)) {
        numbers[propName] = true;
      }
    });
    expect(Object.keys(numbers).length).toBe(10);
  })
  it('checks if all the <Button /> components have a clickHandler', () => {
    const root = shallow(<Panel />);
    const value = root.find('Button');
    value.forEach(btn => {
      expect(btn.prop('clickHandler')).toBeDefined();
    }); 
  });
});
