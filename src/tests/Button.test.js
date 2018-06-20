import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should have className of orange if it is passed that prop', () => {
    const orange = shallow(<Button orange />);
    expect(orange.find('.orange')).toHaveLength(1);
  });

  it('should be the same of the snapshot', () => {
    const button = shallow(<Button />);
    expect(button).toMatchSnapshot();
  });

  it('should have a class of wide when it is given that prop', () => {
    const button = shallow(<Button />);
    expect(button.is('.wide')).toBe(false);

    const wideButton = shallow(<Button wide />);
    expect(wideButton.is('.wide')).toBe(true);
  });

  it('should display the props that were passed to it', () => {
    const button = shallow(<Button name='testButton' />);
    expect(button.text()).toBe('testButton');
  });
});