---
layout: post
---

Inline function expressions are often used in callbacks. Can be anonymous vs named 

{% highlight javascript %}
setTimeout(function(){ 

	console.log('Hello World');

}, 250);

setTimeout(function timeoutStuff(){

	console.log('Hello World');

}, 250);
{% endhighlight %}

Providing a name for the inline function expression has benefits: a name to display in stack traces, provides self documentation etc