import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Button/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
