---
layout: post
---

We can use pass conditional js expressions as children within React components to conditionally trigger extra logic.

{% highlight javascript %}
const Component = React.createClass({
	
	render: function(){
		
		const extraStuff = function(){
			// Extra stuff
		}

		const userLevel = this.props.userLevel;

		return (
		
			<ul>
				{userLevel === 'admin' && extraStuff()}
			</ul>

		);
	}

});
{% endhighlight %}

