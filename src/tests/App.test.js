import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render a Display and Panel tag', () => {
    const component = shallow(<App />);
    expect(component.find('Display').length).toBe(1);
    expect(component.find('Panel').length).toBe(1);
  });

  it('should be able to set state', () => {
    const state = { total: '5' };
    const component = shallow(<App />);
    component.setState({ total: state.total });
    expect(component.state().total).toEqual('5');
  })
});
