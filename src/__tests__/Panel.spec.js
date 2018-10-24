import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  const wrapper = (shallow(<Panel />))
  const mountPanel = mount(<Panel />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should match snapshot', () => {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should shallow render without crashing', () => {
    wrapper;
  })
  it('should have the first div with a className of "component-panel"', () => {
    expect(wrapper.find('div').first().hasClass('component-panel')).toBe(true);
  })
  it('should have 5 divs after the container div', () => {
    expect(wrapper.find('div').first().children()).toHaveLength(5);
  })
  it('should have 19 buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(19);
  })
  it('should have a button that has contains "1"', () => {
    expect(mountPanel.find('button').contains('1')).toBeTruthy()
  })
  it('should have a button that has contains "2"', () => {
    expect(mountPanel.find('button').contains('2')).toBeTruthy()
  })
  it('should have a button that has contains "3"', () => {
    expect(mountPanel.find('button').contains('3')).toBeTruthy()
  })
  it('should have a button that has contains "4"', () => {
    expect(mountPanel.find('button').contains('4')).toBeTruthy()
  })
  it('should have a button that has contains "5"', () => {
    expect(mountPanel.find('button').contains('5')).toBeTruthy()
  })
  it('should have a button that has contains "6"', () => {
    expect(mountPanel.find('button').contains('6')).toBeTruthy()
  })
  it('should have a button that has contains "7"', () => {
    expect(mountPanel.find('button').contains('7')).toBeTruthy()
  })
  it('should have a button that has contains "8"', () => {
    expect(mountPanel.find('button').contains('8')).toBeTruthy()
  })
  it('should have a button that has contains "9"', () => {
    expect(mountPanel.find('button').contains('9')).toBeTruthy()
  })
  it('should have a button that has contains "0"', () => {
    expect(mountPanel.find('button').contains('0')).toBeTruthy()
  })
  it('should have a button that has contains "AC"', () => {
    expect(mountPanel.find('button').contains('AC')).toBeTruthy()
  })
  it('should have a button that has contains "+/-"', () => {
    expect(mountPanel.find('button').contains('+/-')).toBeTruthy()
  })
  it('should have a button that has contains "%"', () => {
    expect(mountPanel.find('button').contains('%')).toBeTruthy()
  })
  it('should have a button that has contains "÷"', () => {
    expect(mountPanel.find('button').contains('÷')).toBeTruthy()
  })
  it('should have a button that has contains "x"', () => {
    expect(mountPanel.find('button').contains('x')).toBeTruthy()
  })
  it('should have a button that has contains "-"', () => {
    expect(mountPanel.find('button').contains('-')).toBeTruthy()
  })
  it('should have a button that has contains "."', () => {
    expect(mountPanel.find('button').contains('.')).toBeTruthy()
  })
  it('should have a button that has contains "="', () => {
    expect(mountPanel.find('button').contains('=')).toBeTruthy()
  })
});
