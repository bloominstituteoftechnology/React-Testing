import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';


describe('<Panel />', () => {
  const panel = shallow(<Panel />);

  it('renders without crashing', () => {
    render(<Panel  />);
  });

  it("have a panel", () => {
    const foundPanel = panel.find(".component-panel")
    expect(foundPanel).toHaveLength(1);
  });

  it("have some buttons", () => {
    const foundButton = panel.find("Button");
    expect(foundButton).toHaveLength(19);
  });


});


