## Questions for PM(s)

* In test case below, what does it mean when App length is equal to 1?

```js
it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});
```

* In `Button.test.js`, when I declare a test case like so

```js
it('renders a wider button', () => {});
```

is a description like this acceptable? Would it be better to say "renders className .component-button.wide" instead, or something along those lines?

* Differences between `shallow` and `mount`, when to use each?

* Line 19 in `Panel.test.js`
