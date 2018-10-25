import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('renders a <div>', () => {
    const wrapper = shallow(<Button />);

    const elements = wrapper.find('div');

    expect(elements.length).toBe(1);

  });

  it('renders buttons correctly', () => {
    const tree = renderer
      .create(<Button name = {'ABC'} clickHandler =  { () => {} } />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onClick event on click of the button', () =>{
    
    const onClickTest = jest.fn();
    let wrapper = mount(<Button name={'buttonClickTest'} clickHandler={onClickTest}/>);
    wrapper.find('button').simulate('click');
    expect(onClickTest).toBeCalledWith('buttonClickTest');

  });


});
