import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Button, {handleClick} from '../components/Button/Button';


Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

it('should display a button', ()=>{
  const root = shallow(<Button />);
  const newButton = root.find('button');

  expect(newButton.length).toBe(1);
})

 it('should display its name', ()=>{
   
    const newButton = shallow(<Button name={'test'} />);
    expect(newButton.text()).toBe('test');
    
  })

});
