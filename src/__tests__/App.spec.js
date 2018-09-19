import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
