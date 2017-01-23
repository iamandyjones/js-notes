---
layout: post
---

{% highlight javascript %}
const Component = React.createClass({

	propTypes: {

		name: React.propTypes.string,
		count: React.propTypes.number

	},

	render: function() { }

});
{% endhighlight %}

If invalid value provided for a prop a warning will be shown in the console (development mode only)