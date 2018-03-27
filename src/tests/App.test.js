import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should render one <Display /> component', () => {
    const component = shallow(<App />);
    expect(component.find(Display)).to.have.length(1);
  })
  it('should render one <Panel /> component', () => {
    const component = shallow(<App />);
    expect(component.find(Panel)).to.have.length(1);
  })
  it('should use clickHandler on <Panel /> component', () => {
    const clickHandler = sinon.spy();
    const component = shallow(<App clickHandler={this.handleClick}/>);
    component.find('button'.simulate('click'));
    expect(clickHandler).to.have.property('callCount', 19);
  })
});
