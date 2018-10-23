import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should match snapshot', () => {
  	const tree = renderer.create(<Button />).toJSON();
  	expect(tree).toMatchSnapshot();
  })

  it('should add orange to class list if on props', () => {
    const wrapper = shallow(<Button orange={true} />)
    expect(wrapper.hasClass('orange')).toBe(true);
  })

  it('should add wide to class list if on props', () => {
  	const wrapper = shallow(<Button wide={true} />)
  	expect(wrapper.hasClass('wide')).toBe(true);
  })

});



// it('clone should call handleCloneClick when clicked', () => {
//   sinon.spy(cloneButton.prototype, '_handleCloneClick');
//   const wrapper = mount(<cloneButton/>);
//   wrapper.find('#clone-btn').simulate('click');
//   expect(spy).toHaveBeenCalled() //adept assertion to the tool you use
// });