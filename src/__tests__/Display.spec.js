import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';


Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render a div with class `component-display`', () => {
    const component = shallow(<Display />);
    expect(component.find('.component-display')).toHaveLength(1);
  });

  it('should display a value passed in as a prop', () => {
    const display = shallow(<Display value='a value'/>);
    const possValue = display.find('.component-display');
    expect(possValue.text()).toEqual('a value')
  });

  it('should display zero as a default value', () => {
    const display = shallow(<Display value ="0"/>);
    const possValue = display.find('.component-display');
    expect(possValue.text()).toEqual('0');
  });
  
  it('should render whatever value it gets passed', () => {
    const component = shallow(<Display value={"6"} />);
    expect(component.contains(
      <div className="display-value">
        6
      </div>
    )).toEqual(true);
  });

});
