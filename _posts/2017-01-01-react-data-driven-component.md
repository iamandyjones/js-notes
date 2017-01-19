---
layout: post
---

Simple example of how we can populate React components with dynamic data. Our container component collects the data and passes it down to leaf components as props.

{% highlight javascript %}
const Data = [
	{
		title: 'Title One',
		description: 'Description One'
	},
	{
		title: 'Title Two',
		description: 'Description Two'
	}
]

const Parent = React.createClass({

	render: function(){
		
		const item = Data[0];

		return (
		
			<div className="parent">
				<Child
					title={item.title}
					description={item.description}
				/>
			</div>

		);
	}

});

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

ReactDOM.render(<Parent />, document.getElementById('content'));
{% endhighlight %}

