import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';
import calculate from '../logic/calculate';

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  });

  it('should render <Display /> and <Panel /> components', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Display).length).toEqual(1);
    expect(wrapper.find(Panel).length).toEqual(1);
  });

  it('simulates click events from child button to parent app', () => {
    const handleClick = sinon.spy();
    const app = mount(<App clickHandler={handleClick}/>);
    const instance = app.instance();
    const initialState = instance.state;
    const newState = {
      "next": "7",
      "operation": null,
      "total": null
    }
    // get panel
    // const panel = app.find(Panel)
    // panel.props().clickHandler = app.props().clickHandler()
    const panel = mount(<Panel clickHandler={app.props().clickHandler}/>)

    // get button number 7
    const button = panel.find('[name="7"]').find('.component-button').children()

    // click button number 7
    button.simulate('click');

    // handleClick.call({}, button.props().children());

    // after click is executed
    expect(handleClick.calledOnce).toEqual(true);
    expect(handleClick.firstCall.args[0]).toEqual('7')

    // after click is executed successfully with correct argument
    // setState
    // app.setState(calculate(instance.state, handleClick.firstCall.args[0]))
    instance.handleClick(handleClick.firstCall.args[0])
    // after setState
    expect(instance.state).toEqual(newState);
  });
});
