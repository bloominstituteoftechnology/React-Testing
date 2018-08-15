import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import calculate from '../logic/calculate';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../logic/calculate');
calculate.mockImplementation((state, button) => {
  const {total, next } = state;
  return { total: String(Number(total) + 1), next: next, operation: button };
});


describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('passes 0 to Display value prop by default', () => {
    const AppComponent = shallow(<App />);
    const DisplayComponent = AppComponent.find('Display');
    expect(DisplayComponent.props()).toEqual({ value: '0' });
  });

  it('passes state.next if it is defined', () => {
    const nextVal = 'next';
    const AppComponent = shallow(<App />);
    AppComponent.setState({ next: nextVal, total: 'total' });
    const DisplayComponent = AppComponent.find('Display');
    expect(DisplayComponent.props()).toEqual({ value: nextVal });
  });

  it('passes state.total if it is defined', () => {
    const total = 'total';
    const AppComponent = shallow(<App />);
    AppComponent.setState({ total: total });
    const DisplayComponent = AppComponent.find('Display');
    expect(DisplayComponent.props()).toEqual({ value: total });
  });

  it('processes clickHandlers appropriately', () => {
    const buttonVal = '+';
    const testState = { total: '1' , next: '1', operation: '-'};
    const returnVal = { total: '2', next: '1', operation: '+' };
    
    const AppComponent = shallow(<App />);
    const { clickHandler } = AppComponent.find('Panel').props();
    AppComponent.setState(testState);
    clickHandler(buttonVal);
    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith(testState, buttonVal);
    expect(AppComponent.state()).toEqual(returnVal);
  });
});
