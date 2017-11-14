---
layout: post
---

In React, to add interactivity, callback handlers are attached to the onClick attribute. The onClick handler will be fired every time the component it's defined on is clicked.

The onClick handler expects to receive a function that it will call whenever the click event is fired.

{% highlight javascript %}

class MyComponent extends React.Component {

	doSomething(){

		console.log('Clicked');

	}

	render(){

		<div onClick={this.doSomething}>Click me</div>

	}

}

{% endhighlight %}

We often need to pass arguments to the callback function. A common pattern to do so is to first __call__ a function which itself returns a function:

{% highlight javascript %}

const JB = 'Joe Bloggs';
const JS = 'John Smith';

class MyComponent extends React.Component {

	doSomething(name){

		return (evt) => {

			console.log(name); // Logs Joe Bloggs or John Smith

		}

	}

	render(){

		<div onClick={this.doSomething(JB)}>Click me</div>
		<div onClick={this.doSomething(JS)}>Or click me</div>

	}

}

{% endhighlight %}

The `doSomething` function is called on render, and it is the returned function which is actually called onClick. 

We __close over__ the `name` argument when we call `doSomething`. `doSomething` returns the new function which will log the appropriate name when the div clicked.
