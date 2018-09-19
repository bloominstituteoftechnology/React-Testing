import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should return 2 div elements', () => {
    const application = shallow(<App />);

    expect(application.find('div').children()).toHaveLength(2);
  });
  
});
