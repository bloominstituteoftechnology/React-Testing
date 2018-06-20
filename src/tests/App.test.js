import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Button from '../components/Button/Button';
import Panel from '../components/Panel/Panel';
Enzyme.configure({ adapter: new Adapter() });

// describe('<App />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//       shallow(<Panel />);
//   });

const app = shallow(<App/>);

describe('App component', () => {
    it('renders without crashing', () => {
      shallow(<App />);
  });
    it('should render a panel of a calculator', () => {
    app;
    const displays = app.find('Display');
    const panel = app.find('Panel');

    expect(displays.length).toBe(1)
    expect(panel.length).toBe(1)
  });
    it('should handle state of of handleClick', () => {
      app;
      const instance = app.instance();
      const buttons = app.find('handleClick');

      expect(instance.state.total).toEqual('0');
      expect(instance.state.next).toEqual(null);
      expect(instance.state.operation).toEqual(null);
    });
    it('simulates click events from child button to parent app', () => {
      const handleClick = sinon.spy();
      const app = mount((<App clickHandler={handleClick}/>));
  
      // get panel
      const panel = app.find(Panel)
      panel.props().clickHandler = app.props().clickHandler()
      // OR const panel = mount((<Panel clickHandler={app.props().clickHandler}/>))
  
      // get button number 7
      const button = panel.find('[name="7"]').find('.component-button').children()
  
  
      // click button number 7
      button.simulate('click', button.props().children);
  
      // console.log(handleClick)
      expect(handleClick.calledOnce).toEqual(true);
  });
});
