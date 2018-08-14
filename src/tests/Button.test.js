import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should display button orange if prop passed named orange', () => {
    const testing = shallow(<Button orange />);
    const compbtn = testing.find('.component-button .orange');
    expect(compbtn.hasClass('orange')).toEqual(true);
  })

  it('should display button wide if prop passed named wide', () => {
    const testing = shallow(<Button wide />);
    const compbtn = testing.find('.component-button .wide');
    expect(compbtn.hasClass('wide')).toEqual(true);
  })

  // it('className should be called component-button if no props passed', () => {
  //   const testing = shallow(<Button />)
  //   const compbtn = testing.find('.component-button');
  //   expect(compbtn.hasClass(null)).toEqual(true);
  // })

  it('should have a function named handleClick', () => {
    const testing = shallow(<Button />);
    const instance = testing.instance();
    expect(instance.handleClick).toBeDefined();
  })

  
});
