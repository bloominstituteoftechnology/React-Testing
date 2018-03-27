import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
// THE FIVE DIV CONTAINERS
  it('should render the first 4 button div', () => {
    const wrapper = shallow((
      <div>
        <Button className="AC" />
        <Button className="+/-" />
        <Button className="%" />
        <Button className="÷" />
      </div>
    ));
    expect(wrapper.find(< Button />)).to.have.length(4);
  });
  it('should render the second 4 button div', () => {
    const wrapper = shallow((
      <div>
        <Button className="7" />
        <Button className="8" />
        <Button className="9" />
        <Button className="x" />
      </div>
    ));
    expect(wrapper.find(< Button />)).to.have.length(4);
  });
  it('should render the third 4 button div', () => {
    const wrapper = shallow(< div className="(3)4buttonComponent" />);
    expect(wrapper.find(< Button />)).to.have.length(4);
  });
  it('should render the fourth 4 button div', () => {
    const wrapper = shallow(< div className="(4)4buttonComponent" />);
    expect(wrapper.find(< Button />)).to.have.length(4);
  });
  it('should render the fifth 4 button div', () => {
    const wrapper = shallow(< div className="(5)4buttonComponent" />);
    expect(wrapper.find(< Button />)).to.have.length(4);
  });
// END FIVE DIV CONTAINERS
});




it('should render children when passed in', () => {
  const wrapper = shallow((
    <MyComponent>
      <div className="unique" />
    </MyComponent>
  ));
  expect(wrapper.contains(<div className="unique" />)).to.equal(true);
});