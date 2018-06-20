import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('shallow renders without crashing', () => {
    shallow(<Button />);
  });

  it('should change state.total on the App Component', () => {
    const button = shallow(<Button />);
    const buttonInstance = button.instance();
    const appInstance = shallow(<App />).instance();
    const seven = button.find('[name="7"]');
    // const plus = button.find('[name="+"]');
    // const equals = button.find('[name="="]');

    expect(appInstance.state.total).toBe('0');
    seven.simulate('click');
    // plus.simulate('click');
    // seven.simulate('click');
    // equals.simulate('click');
    expect(appInstance.state.total).toBe('15');
  });
});