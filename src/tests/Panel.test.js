import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Panel />, div);
  // });

  it('should renders without crashing', () => {
    shallow(<Panel />)
  })

  it('should render one panel class', () => {
    const panel = shallow(<Panel  />)
    const foundPanel = panel.find('.component-panel');
    expect(foundPanel.length).toEqual(1);
  });

  it('should render 19 buttons', () => {
    const panel = shallow(<Panel  />)
    const buttons = panel.find('Button');
    expect(buttons.length).toEqual(19);
  });

});
