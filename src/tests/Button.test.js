import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, render } from 'enzyme';
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
});