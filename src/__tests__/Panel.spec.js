import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it.skip('renders without crashing', () => {
   shallow(<Panel />);
  });
  it('matches snapshot', () => {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('component panel mounts', () => {
    const panel = shallow(<Panel clickHandler= {() => {}} />)
    expect(panel).toBeDefined;
  })
  it('renders with 19 buttons', () => {
    const panel = shallow(<Panel clickHandler= {() => {}} />)
    const buttons = panel.find('Button');
    expect(buttons).toHaveLength(19);
  })
});
