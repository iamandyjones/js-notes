---
layout: post
---

{% highlight javascript %}

onButtonClick = (evt) => {
	
	const btn = evt.target;
	console.log(`Button clicked: ${btn.name} ${btn.value}`);
	
}

render(){
	
	return (

		<div>
			<button 
			name="my-button" 
			value="boom!" 
			onClick={this.onButtonClick}>
			Click Me
			</button>
		</div>

	)

}

{% endhighlight %}
