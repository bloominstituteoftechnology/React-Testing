import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const button = shallow(<Button />);
  it('renders without crashing', () => {
    expect(button).toHaveLength(1);
  });
  it('have one child components', () => {
    expect(button.find('div').children()).toHaveLength(1);
  })
});