---
layout: post
---

"Hard binding" is a pattern which aims to prevent a function losing its intended "this" reference...

{% highlight javascript %}
function foo(){
	console.log(this.a);
}

var obj = {
	a: 2
};

var bar = function(){

	foo.call(obj);
	// Force foo to use "obj" as its
	// binding for "this" keyword
}
{% endhighlight %}

No matter how bar is invoked, it will always call foo with "this" bound to "obj"...

{% highlight javascript %}
bar(); // 2
setTimeout(bar, 100); // 2
bar.call(window); // 2
{% endhighlight %}

Typically this pattern is used with a pass-through of any arguments passed in and any return value received...

{% highlight javascript %}
function foo(something){

	console.log(this.a, something);
	return this.a + something;

}

var obj = {
	a: 2
};

var bar = function(){

	return foo.apply(obj, arguments);

}

var b = bar(3); // 2 3
console.log(b); // 5
{% endhighlight %}

Another way this pattern is used is with a reusable helper...

{% highlight javascript %}
function foo(something){

	console.log(this.a, something);
	return this.a + something;

}

function bind(fn, obj){

	return function(){
		return fn.apply(obj, arguments);
	}

}

var obj = {
	a: 2
};

var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); // 5
{% endhighlight %}

Since hard binidng is such common practice, ES5 provides a built in utility, Function.prototype.bind

Bind returns a new function that is hard-coded to call the original function with the "this" context set as specified

{% highlight javascript %}
function foo(something){

	console.log(this.a, something);
	return this.a + something;

}

var obj = {
	a: 2
};

var bar = foo.bind(obj);

var b = bar(3); // 2 3
console.log(b); // 5
{% endhighlight %}


**CONTEXT**

Many libraries functions (and some new built in js functions) allow you to specify an optional parameter, "context". 

This is designed to rid the need for using bind() to ensure a callback function uses a particular "this". 