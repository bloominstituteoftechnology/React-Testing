import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render a button', () => {
    const button = shallow(<Button />);
    expect(button.length).toEqual(1)
  })

  it('clicking on the button should show an alert', () => {
    window.alert = jest.fn();
    const clicked = shallow(<Button clickHandler={window.alert} />);

    clicked.find('button').simulate('click');

    expect(window.alert).toHaveBeenCalledTimes(1);
  })  

});
