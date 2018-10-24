import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import '../setupTests.js';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
  shallow(<App />);
  });
});
