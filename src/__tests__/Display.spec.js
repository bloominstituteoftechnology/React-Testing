import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe.only('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('matches snapshot', () => {
    expect(renderer.create(<Display />).toJSON()).toMatchSnapshot;
  })
  it('renders correct UI', () => {
    expect(shallow(<Display />).find('.component-display').length).toBe(1);
  });
  // it('renders props correctly', () => {
  //   expect(shallow(<Display value="0" />).props().this.props).to.equal("0"); // couldn't get prop to check corretly. :(
  // })
});
