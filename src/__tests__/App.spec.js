import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

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
    const buttonName = '+';
    const expectedResult = '0+';
    const calculate = (state, buttonName) => ({
        next: `${ state.total + buttonName }`,
      });

    const AppComponent = shallow(<App />);
    AppComponent.instance().handleClick(buttonName);
    expect(AppComponent.instance().state([next])).toEqual({ next: expectedResult, });
  })
});
