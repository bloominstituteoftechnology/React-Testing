import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

//Import the used ccomponents  Display and Panel

import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should contains Display and Panel components', () => {
    const app = shallow(<App />);

    const display = app.find(Display);
    const panel = app.find(Panel);


    expect(display.length).toEqual(1);
    expect(panel.length).toEqual(1);
  });

  it('should check the initial state', () => {
    const app = shallow(<App />);

    const instance = app.instance();

    expect(instance.state).toEqual({ total: '0', next: null, operation: null });


  });

});