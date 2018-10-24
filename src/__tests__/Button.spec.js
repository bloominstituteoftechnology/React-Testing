import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('matches snapshot', () => {
    expect(renderer.create(<Button />).toJSON()).toMatchSnapshot;
  })
  it('renders without crashing', () => {
    shallow(<Button />);
  });
  it('renders correct UI', () => {
    expect(shallow(<Button />).find('.component-button').length).toBe(1);
  });
  it('renders props correctly', () => {
    expect(shallow(<Button />).instance().props.name).toBe(undefined);
  })
});
