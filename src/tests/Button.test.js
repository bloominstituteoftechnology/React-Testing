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
  } );
  it( 'renders with className button-wide', () =>
  {
    const component = shallow( <Button wide /> );
    expect( component.find( '.component-button' ) ).toHaveLength( 1 );
    expect( component.find( '.wide' ) ).toHaveLength( 1 );
  })
} );
it('renders with className')
