import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('matches snapshot', () => {
    expect(renderer.create(<Panel />).toJSON()).toMatchSnapshot;
  })
  it('renders correct UI', () => {
    expect(shallow(<Panel />).find('.component-panel').length).toBe(1);
  });
});
