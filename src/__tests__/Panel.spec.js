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

  it('snapshot of panel', () => {
    const tree = renderer.create(<Panel />);
    expect(tree).toMatchSnapshot();
  });

  it('How many buttons in panel', () => {
    const tree = shallow(<Panel />);
    const button = tree.find('Button');
    expect(button.length).toBe(19);
  });
});
