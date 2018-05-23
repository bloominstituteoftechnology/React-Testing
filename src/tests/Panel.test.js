import React from 'react';
import ReactDOM from 'react-dom';
//import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('Panel', () => {
  
  it('have 5 children divs', () => {
    const component = shallow(<Panel />);
    expect(component.find('div').children('div')).toHaveLength(5);
  });
  
  it('shoud have 19 buttons', () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).toHaveLength(19);
  });
  
  it('buttons should handle name property passed to it', () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).hasButton('AC').toEqual(true);
  });
  
});