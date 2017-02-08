---
layout: post
---

Property initialisers allow us to further simplify React class components.

Normally, because "this" is not bound to the component in custom component methods that we specify, we need to manually bind it within the constructor: 

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

However, with property initialisers we can instead write ourOwnMethod() as an arrow function, which will bind this to the component...

{% highlight javascript %}
class Component extends React.Component {

	ourOwnMethod = () => (
		// this now references the component
	)

}
{% endhighlight %}

Because of the benefit of how arrow functions bind this, we no longer need to manually bind it in the constructor, which can therefore be removed (in this simple example).

## Another benefit

Property intialisers also allow us to define intiial state outside of the constructor. So instead of...

{% highlight javascript %}
class Component extends React.Component {

	constructor(props){
		super(props);
		this.state = { stuff: [] }
	}

}
{% endhighlight %}

We can simply write...

{% highlight javascript %}
class Component extends React.Component {

	state = { stuff: [] }

}
{% endhighlight %}

