import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount} from 'enzyme';
import App from '../App';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel/>);
  });
  it('changes app state',()=>{
    const wrapper=mount(
      <App>
        <Panel></Panel>
      </App>
    )
    wrapper.find('button').filterWhere(btn=>btn.text()==='7').simulate('click');
    expect(wrapper.state().next).toBe('7');
    wrapper.find('button').filterWhere(btn=>btn.text()==='+').simulate('click');
    expect(wrapper.state().operation).toBe('+');
    wrapper.find('button').filterWhere(btn=>btn.text()==='3').simulate('click');
    expect(wrapper.state().total).toBe('7');
    expect(wrapper.state().next).toBe('3');
    wrapper.find('button').filterWhere(btn=>btn.text()==='=').simulate('click');
    expect(wrapper.state().total).toBe('10');
    expect(wrapper.state().operation).toBe(null);
    expect(wrapper.state().next).toBe(null);
  })
});
