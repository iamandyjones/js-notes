---
layout: post
---

Simple example of collecting form data from an input field.

N.B. Because this demo uses React refs, it is considered an "uncontrolled component" - we are retrieving/manipulating data from the actual DOM. Ideally we should only concern ourselves with manipulating state and leave all DOM reconciliation to React.

{% highlight javascript %}

onFormSubmit(evt){
	
	evt.preventDefault();
	console.log(this.textInput.value);

}

render(){
	
	return (

		<div>

			<form onSubmit={this.onFormSubmit}>

				<input placeholder="name" ref={(input)=> { this.textInput = input; }} />
				<input type="submit" />

			</form>

		</div>

	)

}

{% endhighlight %}

## Convert to controlled component

{% highlight javascript %}

// Assumed 'this' has been bound correctly

onFormSubmit(evt){
	
	evt.preventDefault();
	console.log(this.state.name);

}

onNameChange(evt){
	
	this.setState({name: evt.target.value});

}

render(){
	
	return (

		<div>

			<form onSubmit={this.onFormSubmit}>

				<input placeholder="name" value={this.state.name} onChange={this.onNameChange} />
				<input type="submit" />

			</form>

		</div>

	)

}

{% endhighlight %}
