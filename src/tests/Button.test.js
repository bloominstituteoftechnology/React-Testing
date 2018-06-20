import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

// describe('<Button />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Button />, div);
//   });
// });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />)
  });
});

describe('<Button />', () => {
  it('renders with className `component-button` when not passed orange or wide props', () => {
    const button = shallow(<Button />);

    const className = button.find('.component-button');

    expect(className.length).toEqual(1);
  });

  it('renders with className `component-button orange` when passed the orange prop', () => {
    const button = shallow(<Button orange/>);
    const className = button.find('.component-button .orange');

    expect(className.length).toEqual(1);

  });

  it('renders with className `component-button wide` when passed the wide prop', () => {
    const button = shallow(<Button wide/>);
    const className = button.find('.component-button .wide');

    expect(className.length).toEqual(1);
  });

  it('renders with className `component-button orange wide` when passed the orange and wide props', () => {
    const button = shallow(<Button wide orange/>);
    const className = button.find('.component-button .orange .wide');

    expect(className.length).toEqual(1);
  });

});
