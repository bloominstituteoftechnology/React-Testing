import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {

  //make sure is working
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  //check if anything has been changed
  it('should match snapshot', () => {
  	const tree = renderer.create(<Panel />).toJSON();
  	expect(tree).toMatchSnapshot();
  })

});
