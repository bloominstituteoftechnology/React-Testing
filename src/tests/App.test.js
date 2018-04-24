import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper= shallow(<App/>);
  it('renders without crashing', () => {
    expect(wrapper). toHaveLength(1);
  });
  it('should have two children siblings', () => {
    expect(wrapper.find('div').children()).toHaveLength(2);
  })
});
