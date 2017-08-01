---
layout: post
---

## Intro to Classes

In object-oriented programming, a class is an extensible code-template for creating objects.

A class provides initial values for state (member variables), and default implementations of behaviour (member functions/methods).

A class includes a default constructor - a sub-routine responsible for creating objects.

When a new object is created from a class, JS invokes the constructor. The resulting object is called an instance of the class - instantiation. The member variables specific to the resulting object are called instance variables, in contrast with the class variables shared across the class. 

## ES6 Classes

Whilst javascript isn't a classical language, ES6 introduces syntax to declare a class.

This is just syntax sugar on top of javascript's prototype-based inheritance model.

{% highlight javascript %}
class Component extends React.Component {

	render() { }

}
{% endhighlight %}
