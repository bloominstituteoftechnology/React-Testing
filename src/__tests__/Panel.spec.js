import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Panel />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Panel />);
  });
  
  it('should render 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('Button');

    expect(elements.length).toBe(19);
  });

});
