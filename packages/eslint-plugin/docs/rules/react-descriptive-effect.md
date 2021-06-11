# Descriptive React effects. (react-descriptive-effect)

Effect hooks are quite handy, but things can quickly get out of control and, suddenly, you see yourself trying to decode what one of six gigantic `useEffect`s is supposed to do. This rule encourages the developer to describe the effect by using a named function or a descriptive comment above the hook.

One liners are currently allowed.

## Rule Details

The following patterns are considered warnings:

```js
function Comp1() {
  useEffect(() => {
    setPotato('fried');
    setDrink('soda');
    setDesert('iceCream');
  });
}

function Comp2() {
  useLayoutEffect(function () {
    setPotato('fried');
    setDrink('soda');
    setDesert('iceCream');
  });
}
```

The following patterns are not warnings:

```js
function Comp3() {
  useLayoutEffect(function updatePotato() {
    setPotato('fried');
    setDrink('soda');
    setDesert('iceCream');
  });
}

function Comp4() {
  // Updates lunch items
  useEffect(() => {
    setPotato('fried');
    setDrink('soda');
    setDesert('iceCream');
  });
}

function Comp5() {
  useEffect(() => setPotato('fried'));
}
```

### Options

This plugin takes an option object:

```ts
interface Options {
  additionalHooks: string; // RegExp default: undefined
  maxStatements: number; // default: 2
}
```

- `additionalHooks`: specifies additional hooks this rule should considered.
- `maxStatements`: specifies additional hooks this rule should considered.

**Example:**

With the config object:

```json
{
  "additionalHooks": "(usePotato|use*Effect)",
  "maxStatements": 3
}
```

The following patterns are considered warnings:

```js
function Comp5() {
  usePotato(() => {
    setPotato('fried');
  });

  useIceCreamEffect(function () {
    setState('iceCream');
  });
}
```

The following patterns are not considered warnings:

```js
function Comp5() {
  usePotato(() => {
    setPotato('fried');
  });

  useIceCreamEffect(function () {
    setState('iceCream');
  });
}
```

## When Not To Use It

If you don't care about understandability of your React components you're safe to disable this rule.
