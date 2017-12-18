---
layout: post
---

With ES6 a shorter syntax exists for method definitions on objects initialisers, when a function is assigned to a method name:

{% highlight javascript %}

const obj = {
	
	methodOne: function(){

		// stuff

	}, 

	methodTwo: function(){

		// stuff

	}

}

{% endhighlight %}

Can also be written as...

{% highlight javascript %}

const obj = {
	
	methodOne(){

		// stuff

	}, 

	methodTwo(){

		// stuff

	}

}

{% endhighlight %}
