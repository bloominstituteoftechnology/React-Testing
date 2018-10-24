import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });
});
