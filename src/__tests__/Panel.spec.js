import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should render 6 divs', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('div');

    expect(elements).toHaveLength(6);
  });

  it('should render 19 button components', () => {
    const wrapper = shallow(<Panel />);
    const btns = wrapper.find('Button');
    
    expect(btns.length).toEqual(19);
  });

  it("calls clickHandler on button click", () => {
		const Func = jest.fn();
		const wrapper = mount(<Panel clickHandler={Func} />);
		wrapper.find("button").first().simulate("click");
		expect(Func).toHaveBeenCalled();
	});
  
});
