import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
