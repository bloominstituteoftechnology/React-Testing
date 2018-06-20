import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
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
  it('should shallow render without crashing', () => { 
    shallow(<Button />);
    });
       /* it('should change state .total on app component', () => {
        const button = shallow(<Button />);
        const instance = button.instance();
        const seven = button.find('togle');
        expect(instance.state.isOn).toEqual(false);
        button.simulate('click');
        expect(instance.state.isOn).toEqual(true);
        button.simulate('click');
        expect(instance.state.isOn).toEqual(false);
    });*/
});