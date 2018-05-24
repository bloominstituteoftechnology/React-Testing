import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should not differ from snapshot', () => {
    const panel = shallow(<Panel />);

    expect(panel).toMatchSnapshot();
  });

  it('clickiing on button should fire Panel prop clickHandler', () => {
    const clickHandler = jest.fn();
    const panel = shallow(<Panel clickHandler={clickHandler} />);

    // either of these work
    // let button = panel.find('button').first();
    // let button = panel.find('[name="7"] button');

    panel.find('button').forEach((button, i) => {
      button.simulate('click');
      expect(clickHandler.mock.calls.length).toBe(i + 1);
    });
  });
});
