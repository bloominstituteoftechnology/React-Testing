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

  it('Should return a button render', () => {
    const button = shallow(<Button />);
    expect(button.find('div')).toHaveLength(1);
  })

  it('Should have orange in classNames array if orange prop is passed', () => {
    const button = shallow(<Button orange />);
    expect(button.hasClass('orange')).toBe(true);
  })

});
