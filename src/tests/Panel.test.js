import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

// import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('should render five rows of buttons', () => {
    const panel = shallow(<Panel />);
    const displayPanel = panel.find('.component-panel');
    expect(displayPanel.children().length).toEqual(5)
  })

  // it('should change the state.total to 8 when you click the button labeled 8', () => {
  //   const panel = shallow(<Panel />);
  //   const props = {name: '8'}
  //   let invocation = panel.find('Button');
  //   console.log(invocation);
    
  // })
});