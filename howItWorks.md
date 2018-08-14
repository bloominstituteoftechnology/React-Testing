Requirements for our switch

- should display a title that is passed to it using props
- should display "I can test React components" if no title is provided
- should check to see if the state matches whether the switch is on or off (is my JSX connected correctly to my state)
- should be off by default 
- should have a button to toggle the on/off switch (events)
- the toggle button should show an alert that shows the switch state

how do you eat an elephant? one bite at a time.
how do you write a React application? one component at a time.
how do you test a React application? by testing one component at a time.

Switch component ===> [Display === Controls]
- they interact with each other by passing `state` using `props`
- functionality of the components are on `event handlers`: `onClick`, `onSubmit`, etc.

A side effect of testable code is cleaner code.

A react component is function that takes in data and generates a piece of UI: `Component = (data) => UI`

Who is responsible for testing that the JSX generates the correct HTML? The react team - the creators of the framework or the library.

1. Add the appropriate `enzyme` dependencies to the dev dependencies

```
$ yarn add enzyme enzyme-adapter-react-16 react-test-renderer --dev
```

2. Create `setupTests.js` inside the `/src` folder

```
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');

Enzyme.configure({ adapter: new EnzymeAdapter() });
```

3. Import shallow on `.spec.js` files to speed things up

```
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// becomes

import { shallow } from 'enzyme'
```