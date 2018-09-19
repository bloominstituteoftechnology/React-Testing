
#React Testing Notes: 

App.test.js file comes with the create react app. 
    -provided test that checks if App component mounts without crashing
    - install and import in renderer from 'react-test-renderer;

##Snapshot: 

- describe statement for App component wrapping the App

```javascript
    it('should match snapshot', () => {
        const tree = renderer.create(<App />).toJSON();

        expect(tree).toMatchSnapshot();
    })
```
- as soon as test runs it will take a snapshot
- this will create a snapshot folder with snaps generated in HTML form
- snapshot testing knows when a test is no longer valid and gives you the option to remove it 
- use case: know if the component is rendered differently when changes are made to the application 
    - any change that changes the UI will break the test

##Enzyme:

- install and import enzyme
- add global setupTest.js file



##Reasons to Test: 

- Does it render correctly? 
- Does it render sub-components and how many of them
- Are props being rendered correctly? 
- Is the state handled correctly? 
- Does it handle events correctly? 

##What makes a Good Test: 

- independent 
- test only what needs to be tested 
- one test per behavior and functionality, multiple assertions are okay
- one code at a time