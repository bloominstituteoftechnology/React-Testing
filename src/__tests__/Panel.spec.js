import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('has the correct number of divs', () => {
    const panelWrap = shallow(<Panel />)

    const parentDiv = panelWrap.find('div.component-panel')

    expect(parentDiv.children().length).toBe(5)

    parentDiv.children().forEach( (node, ind) => {
      if (ind < 4) expect(node.children().length).toBe(4)
      else expect(node.children().length).toBe(3)
    })
  })
});
