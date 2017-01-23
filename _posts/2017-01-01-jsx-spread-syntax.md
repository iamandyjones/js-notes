---
layout: post
---

{% highlight javascript %}
const Component = React.createClass({
	
	render: function(){
		
		const props = {msg: 'Hello', recipient: 'World'}

		return (
		
			<Component msg={"Hello"} recipient={"World"} />

			{/* Or */}

			<Component {...props} />

		);
	}

});
{% endhighlight %}
