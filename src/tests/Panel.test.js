import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

// describe('<Panel />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Panel />, div);
//   });

  it('properly passes down a clickHandler function', () => {
      const fn = jest.fn()
      const wrapper = mount(<Panel clickHandler={fn} />)
      wrapper.find(`[name="${button}"] button`).simulate('click')
      // expect(fn.mock.calls.length).toBe(1)
    })


    it('renders without crashing', () => {
      const component = shallow(<Panel />);
      expect(component.find('div').length).toBe(6)
      // ReactDOM.render(<Panel />, div);
    });


  it('renders the correct amount of buttons', () => {
    const wrapper = shallow(<Panel />)
    expect(wrapper.find('Button').length).toBe(buttons.length)
  })
});
