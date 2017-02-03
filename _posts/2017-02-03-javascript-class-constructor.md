---
layout: post
---

Any time we define our own custom methods within a React component, we need to manually bind "this" to the component ourselves:

{% highlight javascript %}
class Component extends React.Component {

	constructor(props){
		super(props);
		this.ourOwnMethod = this.ourOwnMethod.bind(this);
	}

	ourOwnMethod(){
		// this now references the component
	}

}
{% endhighlight %}

Constructor is a special function in a javascript class. Javascript invokes the constructor function whenever an object is created via a class.

In a React component, React invokes the constructor with the components props. I.e. whenever we extend React.Component the constructor function will automatically be called passing in the component props as an argument.

The first thing that we do inside the constructor is call super(props), again passing in the component props.

The React.Component class that our our Component class is extending defines its own constructor(). By calling super(props), our class is invoking that constructor() function within the base class first of all. 

The constructor function defined by React.Component will bind "this" inside OUR own constructor to the component for us. Therefore it's good practice to always call super() first whenever we declare a constructor for our component.

We can then call bind() on our custom component methods inside our constructor.

{% highlight javascript %}
constructor(props){
	super(props);
	this.ourOwnMethod = this.ourOwnMethod.bind(this);
}
{% endhighlight %}

A function's bind() method allows us to specify what the context of this should be inside that function.

Above is a common javascript pattern where we redefine our function method to itself but bound to "this" (the component). NOw whenever our custom method executes, this will reference the component rather than null.
