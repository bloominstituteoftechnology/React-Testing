import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Button from '../components/Button/Button';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders 19 <Button /> components', () => {
    const wrapper = shallow(<Panel />);
    console.log(wrapper.find(Button));
    expect(wrapper.find(Button)).toHaveLength(19);
  });
});
