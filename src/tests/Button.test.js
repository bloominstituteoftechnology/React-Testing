import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('Should return correct button name ', () => {
    const wrapper = shallow(
    <Button name={"AC"} orange={true} wide={true} clickHandler={() => {}}/>
  );
  expect(wrapper).toMatchSnapshot()
  });

  it("Button renders correctly", () => {
    const wrapper = render(
      <Button name={"AC"} orange={true} wide={true} clickHandler={() => {}}/>
    );
    expect(wrapper).toMatchSnapshot()
  })

  it("should contain a class of orange wide", () => {
    const wrapper = shallow(<Button orange={true} />);
    expect(wrapper.find("div").first().hasClass("orange")).toEqual(true);
  });
});