import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });


describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  
  it('matches the snapshot', () => {
    const tree = renderer.create(<Button />).toJSON()
    
    expect(tree).toMatchSnapshot()
    
  })
});

