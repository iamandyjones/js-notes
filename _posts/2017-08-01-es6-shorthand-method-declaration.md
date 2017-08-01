---
layout: post
---

ES6+ allows us to use shorthand for class method declaration. Notably we omit a colon, a function keyword, and a comma.

## The ES5 way...

{% highlight javascript %}
var Component = React.createClass({
	
	ourOwnMethod: function(){

	},

	render: function(){

	}

});
{% endhighlight %}

## The ES6 way...

{% highlight javascript %}
class Component extends React.Component {

	constructor(props){
		super(props);
		this.ourOwnMethod = this.ourOwnMethod.bind(this);
	}

	ourOwnMethod(){
		// this now references the component
	}

	render() { }

}
{% endhighlight %}

