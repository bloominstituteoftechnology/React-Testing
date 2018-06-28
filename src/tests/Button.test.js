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
    // const button = header.find('.toggle');

    expect(button.length).toEqual(1);
  });

  //trying to figure check a prop of the button that's orange
  it.skip('should render a button that is orange', () => {
    const wrapper = shallow(<Button />);
    

    expect(wrapper.props(orange).data).toBe('orange');
  });


});
