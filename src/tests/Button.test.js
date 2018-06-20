import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('only renders one button?', () => {
    const button = shallow(<Button />);
    const componentButton = button.find('.component-button')
    expect(componentButton.length).toEqual(1);
  });
  it('should render a wide button', () => {
    const button = shallow(<Button wide />);
    expect(button.find('.wide').length).toEqual(1);
  })
  it('should render an orange button', () => {
    const button = shallow(<Button orange />);
    expect(button.find('.orange').length).toEqual(1);
  })
  it('should match snapshot', () => {
    const button =  shallow(<Button />);
    expect(button).toMatchSnapshot();
  })
  it('name props work properly', () => {
    const button = shallow(<Button name='Andrew' />)
    expect(button.text()).toBe("Andrew")
  })
});
