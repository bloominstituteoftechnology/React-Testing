import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Button from '../components/Button/Button';


describe('<Button />', () => {
  const button = shallow(<Button />);


  it('renders without crashing', () => {
    render(button);
  });

  it('have a button', () => {
    button.find("component-button");
    expect(button).toHaveLength(1);
  });

  it("have a name prop", () => {
    const props = {name:'9'};
    const bouton = shallow(<Button {...props}/>);
    const button = bouton.find('h3');

    expect(button.text()).toEqual('9');
  })



  it("have a button click", () => {
    const HandleChange = jest.fn();
    const props = {clickHandler: HandleChange}
    const button = shallow(<Button {...props}/>);
    const clicker = button.find("button");
    clicker.simulate("click");
    expect(HandleChange).toHaveBeenCalledTimes(1);



  });
//got the button click to work...

//created a name prop test and it's not working...I'm pretty certain
//the code is correct. I'm going to break from it a bit and come back. 



});
