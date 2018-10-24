import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';

import '../setupTests.js';
import App from '../App';

// Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render
  shallow(<App />);
  // , div);
  });
});
