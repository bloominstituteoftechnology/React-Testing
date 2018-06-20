import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should have classname of orange when passed the orange prop', () => {
    const orange = shallow(<Button orange/>);
    expect(orange.find('.orange')).toHaveLength(1);
  });

  it('should display a button',() => {
    const display = shallow(<Button/>);
    expect(display.find('button')).toHaveLength(1);
  });

  it('should have a wide button', () => {
    const props = 'orange';
    const wide = shallow(<Button wide />);
    expect(wide.find('.wide')).toHaveLength(1);
  });

  //I used Luis's gist as a model for the click handler. The gist had a toggle instead of a clickHandler but it works in a similar way.
  it('should execute click handler', () => {
    window.alert = jest.fn();
    const click = shallow(<Button clickHandler={window.alert} />);
    click.find('button').simulate('click');
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
  
});
