import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    shallow(<App />); // notice this only renders App and will not render any child components
  });
});


// yarn init -y
// yarn add enzyme enzyme-adapter-react-16 react-test-renderer jest 
// *PSA: just remove `import sinon from sinon` from your test files to avoid the app throwing an error* 
// tweak your 'test script' in your package.json file to look like this:

  // scripts: {
  //   "test": "jest --watch"
  // }

// add a global setup file: src/setupTests.js.
  // import { configure } from 'enzyme';
  // import Adapter from 'enzyme-adapter-react-16';

  // configure({ adapter: new Adapter() });
// yarn test
