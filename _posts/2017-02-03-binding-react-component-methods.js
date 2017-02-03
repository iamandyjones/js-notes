---
layout: post
---

React provides a default set of API methods withn a React component, such as render() and componentDidMount().

When working within these default methods, React automatically binds the this keyword to the component for us.

This is not the case when we define our own custom component methods.

{% highlight javascript %}

class Component extends React.Component {

	render(){
		// this references the component
	}

	ourOwnMethod(){
		// this is null
	}

}
{% endhighlight %}

Therefore any time we define our own custom component methods we need to manually bind "this" to the component ourselves as follows:

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



