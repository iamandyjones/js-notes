---
layout: post
---

Context allows us to pass down variables from component to component without having to manually pass them as props at every level.

The feature is experimental and should be used with restraint. It is most suitable for variables that are trule global, for example the central store in Redux.

When a context is defined, any child components within the tree hierarchy can access this global context and retrieve its variables.

In order to pass context from a parent component to its children, we need to define two attributes in the parent class: `childContextTypes` and `getChildContext`.

Within the children we need define `childContextTypes` to retrieve the context. 

TBC

{% highlight javascript %}



{% endhighlight %}

