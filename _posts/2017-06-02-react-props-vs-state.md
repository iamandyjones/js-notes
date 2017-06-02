---
layout: post
---

## Props

Props are immutable pieces of data that are passed into a component. They are read-only inputs passed from a parent into a child. 

If we think of a component as a "function", the props are the "paramaters".

Once props are passed into a component, they become available via the this.props property.

A component can use the props or pass them onto children, but cannot modify them.

Any javascript object can be passed as a prop, including strings, objects, functions, React elements, virtual DOM nodes.

## State

State holds local data that is private to a component. Unlike props, state is mutable by the component. 
