import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';


import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
});
