import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Button />, div);
  // });

  it('renders without crashing', () => {
    shallow(<Button />)
  });

  it('should render button element', () => {
    const button= shallow(<Button />)
    const foundButton = button.find('button');
    expect(foundButton.length).toEqual(1);
  });

  it('should invoke handleClick when click the button', () => {
    const spy = jest.fn();
    const button = shallow(<Button clickHandler={spy} />)
    const foundButton = button.find('button');
    foundButton.simulate('click');
    foundButton.simulate('click');
    expect(spy).toHaveBeenCalledTimes(2);
  })
  
});
