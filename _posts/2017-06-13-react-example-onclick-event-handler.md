---
layout: post
---

{% highlight javascript %}

onButtonClick = (evt) => {
	
	const btn = evt.target;
	console.log(`The button ${btn.name} was clicked, the value is: ${btn.value}`);
	
}

render(){
	
	return (

		<div>
			<button name="my-button" value="boom!" onClick={this.onButtonClick}>Click Me</button>
		</div>

	)

}

{% endhighlight %}
