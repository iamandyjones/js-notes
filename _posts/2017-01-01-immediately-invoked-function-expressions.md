---
layout: post
---

Typically a function expression would be invoked as follows:

{% highlight javascript %}
function foo(){ 
	
	console.log('ran');

}

foo(); // Trigger the function
{% endhighlight %}

Alternatively we can invoke a function immediately as follows

{% highlight javascript %}
(function IIFE(){
	
	console.log('ran');

})();
{% endhighlight %}

The outer ( ) that surrounds the function expression is just a nuance of JS grammar needed to allow it to be treated as an expression rather than a normal function declaration.

The final () on the end of the expression is responsible for executing the function expression immediately before it.

An IIFE is just a function, so it creates scope in the normal way. Therefore this pattern is often used to declare variables that won't affect the surrounding code outside of the IIFE.

{% highlight javascript %}
var a = 42;

(function IIFE(){

	var a = 10;
	console.log(a); // 10

})();

console.log(a); // 42
{% endhighlight %}

An IIFE can also return a value which can be assigned to a variable...

{% highlight javascript %}
var x = (function IIFE(){
	return 42;
})();

console.log(x); // 42
{% endhighlight %}

Whilst it's good practice to name the IIFE as above, we can also use an "anonymous IIFE"...

{% highlight javascript %}
(function(){

	var a = 10;
	console.log(a); // 10

})();
{% endhighlight %}