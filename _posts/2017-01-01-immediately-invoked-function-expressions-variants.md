---
layout: post
---

## Anonymous IIFE
{% highlight javascript %}
(function(){

	var a = 10;
	console.log(a); // 10

})();
{% endhighlight %}

## Named IIFE
{% highlight javascript %}
(function IIFE(){

	var a = 10;
	console.log(a); // 10

})();
{% endhighlight %}

Invoking () pair moved to inside of wrapping () pair (does exactly the same as above)
{% highlight javascript %}
(function IIFE(){

	var a = 10;
	console.log(a); // 10

}()); // invoking () on inside, straight after function expression
{% endhighlight %}

## IIFE with arguments

Here the window object is passed in as a parameter to the IIFE

The window object passed in is named "global" within the IIFE to clearly delineate global vs non-global references.

We can pass in anything from the enclosing scope, and we can name the parameter anything we want.

{% highlight javascript %}
var a = 2;

(function IIFE(global){

	var a = 10;
	console.log(a); // 10
	console.log(global.a); // 2

})(window);

console.log(a); // 2
{% endhighlight %}