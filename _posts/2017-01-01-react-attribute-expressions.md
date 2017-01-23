---
layout: post
---

{% highlight javascript %}
const Component = React.createClass({

	render: function(){
		
		const status = 'arrived';

		return (
		
		<div>
		<Child message={status === 'arrived' ? 'Hi' : 'Bye'} />
		</div>

		);
	}

});
{% endhighlight %}

