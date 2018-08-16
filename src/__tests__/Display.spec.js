import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render the Display component', () => {
    const root = shallow(<App />);

    //expect(root.find(‘Display’).length).toEqual(1)
    const display = root.find('Display');
    expect(display.length).toBe(1);
  });

  it('passes 0 to Display value prop by default', () => {
    const AppComponent = shallow(<App />);
    const DisplayComponent = AppComponent.find('Display');
    expect(DisplayComponent.props()).toEqual({ value: '0' });
  });

  it('should pass "next" to the Display component if next is given', () => {
    const root = shallow(<App />);
    const instance = root.instance();

    root.setState({ total: '7', next: '3' });
    const value = root.find({ value: instance.state.next });

    expect(value.length).toBe(1);
  });

  it('should pass the total to the Display component if next is null', () => {
    const root = shallow(<App />);
    const instance = root.instance();

    root.setState({ total: '7', next: null });
    const value = root.find({ value: instance.state.total });

    expect(value.length).toBe(1);
  });

  it('should render expected prop value', () => {
    const wrapper = shallow(<Display value="5" />);
    const div = wrapper.find('.component-display');
    expect(div.text()).toEqual('5');
  });
});
