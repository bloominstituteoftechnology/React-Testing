import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({adapter: new Adapter()});

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display/>, div);
  });
  it('should display props.value', () => {
    let props = {
      value: '100'
    };
    const wrapper = shallow(<Display {...props}/>)
    const totest = wrapper.find('div>div');
    expect(totest).toEqual('100')
  })
});

/*
{"length": 0, Symbol(enzyme.__root__): {"length": 1, Symbol(enzyme.__root__): [Circular], Symbol(enzyme.__unrendered__): <Display value="100"
/>, Symbol(enzyme.__renderer__): {"batchedUpdates": [Function batchedUpdates], "getNode": [Function getNode], "render": [Function render], "simulate

Event": [Function simulateEvent], "unmount": [Function unmount]}, Symbol(enzyme.__node__): {"instance": null, "key": undefined, "nodeType": "host",
"props": {"children": <div className="display-val">100</div>, "className": "component-display"}, "ref": null, "rendered": {"instance": null, "key":
undefined, "nodeType": "host", "props": {"children": "100", "className": "display-val"}, "ref": null, "rendered": "100", "type": "div"}, "type": "di
v"}, Symbol(enzyme.__nodes__): [{"instance": null, "key": undefined, "nodeType": "host", "props": {"children": <div className="display-val">100</div
>, "className": "component-display"}, "ref": null, "rendered": {"instance": null, "key": undefined, "nodeType": "host", "props": {"children": "100",
 "className": "display-val"}, "ref": null, "rendered": "100", "type": "div"}, "type": "div"}], Symbol(enzyme.__options__): {"adapter": {"options": {
"enableComponentDidUpdateOnSetState": true}}}}, Symbol(enzyme.__unrendered__): null, Symbol(enzyme.__renderer__): {"batchedUpdates": [Function batch
edUpdates], "getNode": [Function getNode], "render": [Function render], "simulateEvent": [Function simulateEvent], "unmount": [Function unmount]}, S
ymbol(enzyme.__node__): undefined, Symbol(enzyme.__nodes__): Array [], Symbol(enzyme.__options__): {"adapter": {"options": {"enableComponentDidUpdat
eOnSetState": true}}}}

*/
