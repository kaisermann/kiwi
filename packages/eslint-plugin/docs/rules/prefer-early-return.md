# Descriptive React effects. (react-descriptive-effect)

Effect hooks are quite handy, but things can quickly get out of control and, suddenly, you see yourself trying to decode what one of six gigantic `useEffect`s is supposed to do. This rule encourages the developer to describe the effect by using a named function or a descriptive comment above the hook.

One liners are currently allowed.

## Rule Details

The following patterns are considered warnings:

```js
function Comp1() {
  useEffect(() => {
    setState('potato');
  });
}

function Comp2() {
  useLayoutEffect(function () {
    setState('potato');
  });
}
```

The following patterns are not warnings:

```js
function Comp3() {
  useLayoutEffect(function updatePotato() {
    setState('potato');
  });
}

function Comp4() {
  // Updates a potato
  useEffect(() => {
    setState('potato');
  });
}

function Comp5() {
  useEffect(() => setState('potato'));
}
```

### Options

This plugin takes an option object:

```ts
interface Options {
  additionalHooks: string; // RegExp default: undefined
}
```

- `additionalHooks`: specifies additional hooks this rule should considered.

**Example:**

The following config object:

```json
{
  "additionalHooks": "(usePotato|use*Effect)"
}
```

Would make these invalid:

```js
function Comp5() {
  usePotato(() => {
    setState('potato');
  });

  useIceCreamEffect(function () {
    setState('iceCream');
  });
}
```

## When Not To Use It

If you don't care about understandability of your React components you're safe to disable this rule.
