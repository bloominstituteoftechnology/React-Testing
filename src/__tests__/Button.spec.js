import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('should render a button a value of its "name" prop', () => {
    const root = shallow(<Button name="name" />);
    const instance = root.instance();

    expect(root.find('button').text()).toEqual('name');
  });
});
