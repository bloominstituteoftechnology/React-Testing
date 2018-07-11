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

  it('total should start at 0', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe("0");
    expect(wrapper).toMatchSnapshot();
  });

  it('next should start at null', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.next).toBe(null);
  })

  it('operation should start as null', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.operation).toBe(null);
  })

  it('renders correctly', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  })
});


