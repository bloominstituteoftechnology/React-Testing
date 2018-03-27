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
  it('renders an element with `componet-display` as a class name', () => {
    const component = shallow(<Display />);
    expect(component.find('.component-display')).toHaveLength(1);
  });
  // it('renders the display with `test` value given', () => {
  //   const component = shallow(<Display value="test"/>);
  //   console.log(component.prop('value'))
  //   expect(component.prop('children')).toEqual((<div>test</div>));
  //   /**
  //    * we console logged and found children on the component prop
  //    * object. It rendered inside a div tag for some reason.  So 
  //    * we found that this tests for the property on the key 'value'
  //    */
  // });
  it('should render a div with value "test" and class name component-display', () => {
    const component = shallow(<Display value='test' />);
    expect(component.contains(
      <div className="component-display">
        <div>
          test
        </div>
      </div>
    )).toBeTruthy();
  });
});