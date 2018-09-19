import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Display/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
