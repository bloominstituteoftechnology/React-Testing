import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<App />);

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render a Display component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Display).length).toEqual(1);
  });


  it('should render a Panel component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Panel).length).toEqual(1);
  })

  it('asdasdad', () => {
    const wrapper = shallow(<Panel />);
    const panel = wrapper.find('.component-panel');
    const buttons = panel.find(Button).map(button => button);
    expect(buttons.length).toBe(19);
  })

  it('simulates click events from child button to parent app', () => {
    const handleClick = sinon.spy();
    const app = mount((<App clickHandler={handleClick}/>));

    // get panel
    const panel = app.find(Panel)
    panel.props().clickHandler = app.props().clickHandler()
    // OR const panel = mount((<Panel clickHandler={app.props().clickHandler}/>))

    // get button number 7
    const button = panel.find('[name="7"]').find('.component-button').children()


    // click button number 7
    button.simulate('click', button.props().children);

    // console.log(handleClick)
    expect(handleClick.calledOnce).toEqual(true);
  });
});