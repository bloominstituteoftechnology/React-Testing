
# Architecting Button.spec.js
As I only have about 2 days of TDD under my belt, I'm not sure if any of this is correct so please take it with a grain of salt.

One reference that came in super handy (shout out to Kamry and Vu) was the Stephen Scott's - [_The right way to test React Components_](https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22). I would highly recommend reading this first as the architecture described here is pretty much his architecture, verbatim.

Let's take a look at our code:
```
class Button extends Component {
	handleClick = () => {
		this.props.clickHandler(this.props.name);
	}
	
	render() {
		const classNames = ['component-button',
				this.props.orange ?  'orange'  :  '',
				this.props.wide ?  'wide'  :  '',
		];

	return (
		<div  className={classNames.join(' ').trim()}>
			<button  onClick={this.handleClick}>
				{this.props.name}
			</button>
		</div>
		);
	}
}
```

In order to get our boilerplate going they way Scott illustrates, we need to identify the 
`props` that are being passed in.

From the `Button.propTypes`, we know what's coming in and what their types are:

```
Button.propTypes = {
	name: PropTypes.string,
	orange: PropTypes.bool,
	wide: PropTypes.bool,
	clickHandler: PropTypes.func,
};
```

This then allows us to set up a boilerplate similar to Scott's architecture:

```
describe("Button", () => {

	//Create variables available in the entire describe function
	let props;
	let mountedButton;
	
	//Create a button function that either mounts the Button with
	//the current props or returns the one already mounted
	const button = () => {
		if (!mountedButton) {
		mountedButton = mount(<Button  {...props}  />);
		}
		
		return mountedButton
	}

	//Reset the state of the test to a know starting point
	beforeEach(() => {
		props = {
			name : undefined,
			handleClick : undefined,
			orange : undefined,
			wide : undefined,
		}
		mountedButton =  undefined;
	})

	//Add tests here....
		:
		:
})
```
A few things going on here:
- We are initializing the `props` and the `mountedButton`
- Defining `button` to the be the React component `<Button />` with `props` passed to it using the spread operator: `...`
- Defining all `props` using `beforeEach()`

Scott starts off by talking about _Contracts_. The contract of a component is it's expected behavior and assumptions about it's requirements.   The article really hits upon which contracts to use, how to establish them, etc.

In our case, a few contracts might be:

- it always renders a `div` 
- when `props.orange` is passed, the `div`, has the correct `className`
- when `props.wide` is passed, the `div`, has the correct `className`
- when the `props.clickHandler` is passed and clicked, the argument of the function is the `name`

Let's look at each one separately:

## it always renders a `div`
In the `return()` statement the first line is:

```
return (
		<div  className={classNames.join(' ').trim()}>
			<button  onClick={this.handleClick}>
			:
```

That div seems to always be there and might be a good thing to test for:

```
it('always renders a div', () => {
	//Get a refernce to the button
	const divs = button().find('div');
	expect(divs.length).toBeGreaterThan(0);
})
```
This above code can be inserted directly into the boilerplate mentioned above. Something that helped me out, was the ability to `console.log` the shit out of everything! In this case, I didn't know what `divs` was going to look like so I console'd it. This is my solution for everything. Not efficient, but what's a beginner to do?


## when `props.orange` is passed

This one is little more in-depth. We have to first initialize the props using a `beforeEach()`. 

```
describe('when props.orange is passed, the div', () => {

	//Set the props:
	beforeEach(()=> {
		props.orange =  true;
	})

	it('has the correct className', () => {
	
		//Grab the div
		const classNames = button().find('div').props().className

		//See if the className is correct:
		expect(classNames).toContain('component-button')
		expect(classNames).toContain('orange')
		expect(classNames).not.toContain('wide')
	})
})
```

The rest of the test makes sure that the ternary operator for the `classNames` array is working correctly, specifically:

`this.props.orange ?  'orange'  :  ''`

## when `props.wide` is passed
This is pretty much the same thing as the above except with the props changed:

```
describe('when props.wide is passed, the div', () => {
	
	//Set the props:
	beforeEach(()=> {
		props.wide =  true;
	})

	it('has the correct className', () => {
	
		//Grab the div
		const classNames = button().find('div').props().className

		//See if the className is correct:
		expect(classNames).toContain('component-button')
		expect(classNames).toContain('wide')
		expect(classNames).not.toContain('orange')
	})
})
```

## when the `props.clickHandler` is passed and clicked
This one required a little more research. Since the clickHandler is passed as a function, we need to "mock this function" or "fake the function". Not to be confused with fakin' the funk.

Jest talks about that nicely [here](https://jestjs.io/docs/en/mock-functions).

The first thing is to initialize the props that are being sent into the component. 
```
describe('when the props.clickHandler is passed and clicked', () => {

	//Initialize the props needed to test the click Handler
	beforeEach( () => {

		// Here is were we mock / fake a function. 
		props.clickHandler = jest.fn();
		
		//Set name to any string:
		props.name=  '9';
	})

```

What should this mock function do? Well, we can look at the Button Component's code to give us an idea. The `handleClick` function looks like this:

```
handleClick = () => {
	this.props.clickHandler(this.props.name);
}
```

Let's see if we can validate that the argument of the function is `props.name` 

```

	it('the argument of the function is the name', () => {
		
		//Get reference to the button
		const btn = button().find('button')	  
		
		//Simulate a button click
		btn.simulate('click')
		
		//Grab the arguments of the mock function call and see if it
		//equals props.name
		expect(props.clickHandler.mock.calls[0][0]).toBe(props.name)
	})
})

```

Hope this was helpful. It was a nice feeling when it worked! :)

Please do reach out if you feel there are ways to improve this.

Cheers,
V