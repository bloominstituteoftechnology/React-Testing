import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<Button />', () => {
  const wrapper = shallow(<Button />);
  const instance = wrapper.instance();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render `component-button` when no props are passed within a div', () => {
    expect(wrapper.find('div.component-button')).toHaveLength(1);
  });

  it('should render `component-button orange` when orange prop is passed within a div', () => {
    const wrapperO = shallow(<Button orange/>);

    expect(wrapperO.find('div.component-button')).toHaveLength(1);
    expect(wrapperO.find('div.orange')).toHaveLength(1);
  });

  it('should render `component-button wide` when wide prop is passed withing a div ', () => {
    const wrapperW = shallow(<Button wide/>);

    expect(wrapperW.find('div.component-button')).toHaveLength(1);
    expect(wrapperW.find('div.wide')).toHaveLength(1);
  });

});
