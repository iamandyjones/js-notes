---
layout: post
---

PropTypes allow us to validate the values that are passed into a component via props, and add a layer of documentation to a component.

{% highlight javascript %}
const Component = React.createClass({

	propTypes: {

		name: React.propTypes.string,
		count: React.propTypes.number

	},

	render: function() { }

});
{% endhighlight %}

{% highlight javascript %}
class Component extends React.Component {
	static propTypes = {
		name: propTypes.string,
		count: propTypes.number
	};
		
}
{% endhighlight %}

If invalid value provided for a prop a warning will be shown in the console (development mode only)
