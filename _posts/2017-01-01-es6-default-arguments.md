---
layout: post
---

Traditional style...

{% highlight javascript %}
function divide(a, b){

	var divisor = typeof b === 'undefined' ? 1 : b; 
	// Set default to 1

	return a / divisor;

}
{% endhighlight %}

With ES6 default arguments

{% highlight javascript %}
function divide(a, b = 1){

	return a / b;

}
{% endhighlight %}