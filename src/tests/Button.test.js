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
  it('should render a button', () => {
    const button = shallow(<Button />);
    const componentButton = button.find('.component-button')
    expect(componentButton.length).toEqual(1);
  })
  it('passes the class wide when in props', () => {
    const button = shallow(<Button wide />);
    expect(button.find('.wide').length).toEqual(1);
  })
  it('passes the class orange when in props', () => {
    const button = shallow(<Button orange />);
    expect(button.find('.orange').length).toEqual(1);
  })
  it('should match snapshot', () => {
    const button =  shallow(<Button />);
    expect(button).toMatchSnapshot();
  })
});