import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
  it('should match snapshot',()=>{
    const tree=renderer.create(<App total='100'/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
