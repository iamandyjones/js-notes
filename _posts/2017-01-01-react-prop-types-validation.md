---
layout: post
---

PropTypes allow us to validate the values that are passed into a component via props, and add a layer of documentation to a component.

N.B. React.PropTypes has moved into a different package since React v15.5 so we must first import the library.
{% highlight javascript %}
import PropTypes from 'prop-types';
{% endhighlight %}

{% highlight javascript %}
const Component = React.createClass({

	propTypes: {

		name: PropTypes.string,
		count: PropTypes.number

	},

	render: function() { }

});
{% endhighlight %}

Or with ES6 classes...

{% highlight javascript %}
class Component extends React.Component {
		
}

Component.propTypes = {
	name: PropTypes.string,
	count: PropTypes.number
};
{% endhighlight %}

Or using experimental class properties syntax (requires a transform, included within create react app)...

{% highlight javascript %}
class Component extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		count: PropTypes.number
	};
		
}
{% endhighlight %}

If invalid value provided for a prop a warning will be shown in the console (development mode only).
