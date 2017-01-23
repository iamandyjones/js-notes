---
layout: post
---

{% highlight javascript %}
const Data = [
	{
		title: 'Title One',
		description: 'Description One'
	},
	{
		title: 'Title Two',
		description: 'Description Two'
	},
	{
		title: 'Title Three',
		description: 'Description Three'
	}
]
{% endhighlight %}

{% highlight javascript %}
const Parent = React.createClass({

	render: function(){
		
		const items = Data.map((item, index) => {
			return (
				<Child
					key={'item-' + index}
					title={item.title}
					description={item.description}
				/>
			)
		});

		return (
		
			<div className="parent">
				{items}
			</div>

		);
	}

});
{% endhighlight %}

{% highlight javascript %}
const Child = React.createClass({

	render: function(){

		return (

			<div className="child">
			<h2>{this.props.title}</h2>
			<p>{this.props.description}</p>
			</div>

		)

	}

});
{% endhighlight %}

{% highlight javascript %}
ReactDOM.render(<Parent />, document.getElementById('content'));
{% endhighlight %}

