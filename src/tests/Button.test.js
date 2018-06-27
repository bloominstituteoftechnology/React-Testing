import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Button from '../components/Button/Button';


describe('<Button />', () => {
  const name = "9"
  const doneChange = jest.fn();
  const button = shallow(<Button name={name} doneChange={doneChange}/>)


  it('renders without crashing', () => {
    render(button);
  });

  it('have a button', () => {
    button.find("component-button");
    expect(button).toHaveLength(1);
  });

  it("have a button name", () => {
    const foundName = button.find("h3");
    expect(foundName).toBeTruthy();
  });


  it("have a button click", () => {
    const FoundButton = mount(<Button name={name} doneChange={doneChange}/>);
    const clicker = FoundButton.find("button");
    clicker.simulate("click");
    expect(doneChange).toBeCalled();
    clicker.simulate("click");

  });
  //the test works I think - or it at least can read HandleClick - but it's throwing an error in the code. It's saying this.props.clickHandler is not a function. 




});
