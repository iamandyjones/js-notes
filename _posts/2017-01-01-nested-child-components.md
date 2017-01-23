---
layout: post
---

{% highlight javascript %}
const ProductList = React.createClass({

	render: function(){
		return (
		
			<div className="ui items">
				<Product />
			</div>

		);
	}

});
{% endhighlight %}

{% highlight javascript %}
const Product = React.createClass({

	render: function(){

		return (

			<div>Child Component</div>

		)

	}

});

ReactDOM.render(<ProductList />, document.getElementById('content'));
{% endhighlight %}

