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
	}
]

const Parent = React.createClass({

	displayTitle: function(string){

		console.log(string);

	},

	render: function(){
		
		const items = Data.map((item, index) => {
			return (
				<Child
					key={'item-' + index}
					title={item.title}
					description={item.description}
					handleClick={this.displayTitle}
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

	handleClick: function(){

		this.props.handleClick(this.props.title);

	},

	render: function(){

		return (

			<div className="child">
			<h2>{this.props.title}</h2>
			<p>{this.props.description}</p>
			<p onClick={this.handleClick}>Click Me</p>
			</div>

		);

	}

});

ReactDOM.render(<Parent />, document.getElementById('content'));
{% endhighlight %}
