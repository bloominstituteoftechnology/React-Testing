

Let's start with a `shallow` render with no props:

```
const panelWrap = shallow(<Panel />)

// returns empty object
console.log(panelWrap.instance().props) 

// returns undefined
console.log(panelWrap.prop())

// returns undefined
console.log(panelWrap.prop('clickHandler'))

// returns the entire div, with 5 children!
console.log(panelWrap.props())
```


Now let's look at a `shallow` render with mockHandler passed in:
```
const mockHandler = jest.fn()
const panelWrap = shallow(<Panel clickHandler={mockHandler}/>)

// returns clickHandler as Mock function
console.log(panelWrap.instance().props) 

// returns undefined
console.log(panelWrap.prop())

// returns undefined
console.log(panelWrap.prop('clickHandler'))

// returns the entire div, with 5 children!
console.log(panelWrap.props())
```


Now let's look at a `mount` render with no props passed:
```
const mockHandler = jest.fn()
const panelWrap = mount(<Panel clickHandler={mockHandler}/>)

// returns clickHandler as Mock function
console.log(panelWrap.instance().props) 

// returns undefined
console.log(panelWrap.prop())

// returns clickHandler as Mock function
console.log(panelWrap.prop('clickHandler'))

// returns clickHandler as Mock function
console.log(panelWrap.props())
```


Now let's look at a mount render with a mockHandler passed in:

