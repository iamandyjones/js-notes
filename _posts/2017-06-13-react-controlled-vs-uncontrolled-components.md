---
layout: post
---

In React, the concept of controlled vs uncontrolled components is typically best exaplined relating to forms.

A controlled component is one which allows React to control how it is rendered. Using a text input as an example, React would manage its value using state.

In contrast, an uncontrolled component is not managed by React state, and again using a text input as an example, nmost likely uses refs to access the DOM node directly to retrieve its value.

Controlled components are favourable. By allowing React to control the rendering, we take advantage of its efficient DOM manipulation. We can also be sure that for any given value of state, we can reliably predict what `render()` will return.

With uncontrolled components, knowing the application state is not enough to predict what the page and components will look like. The only way to know what the user has typed for example is to access the DOM element directly via refs and check its value.
