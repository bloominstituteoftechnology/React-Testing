import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Button />);
  });
  
});
