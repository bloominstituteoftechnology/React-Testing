import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    
  });


  it('look for button', () => {
    const bt = shallow(<Button />);
    const ton = bt.find('button');
    expect(ton.length).toEqual(1)
  })

  it('look for a name', () => {
    const bt = shallow(<Button name = "boo"/>);
    const ton = bt.find('button');
    expect(ton.text()).toEqual("boo")

  })

  //ask csaba

  // it('look for a click', () => {
  //   const app = (<App />);
  //   const bt = shallow(<Button name = "boo"/>);
  //   const instance = bt.instance()
  //   expect(instance.handleClick()).toEqual("boo")
  // })
});