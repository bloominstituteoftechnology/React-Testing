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

  it('should render component-button', () => {
        
    const button = shallow(<button />);
    
    expect(component-button.length).toHaveLength(1);
  })

  it('should return onclick', () => {
    window.alert = jest.fn();
    const clicked = shallow(<Button clickHandler={window.alert} />);

    clicked.find('button').simulate('click');

    expect(window.alert).toHaveBeenCalledTimes(1);
  })  

});