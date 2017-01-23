---
layout: post
---

The object types allows us to set properties (named locations) that each hold their own values of any type.

{% highlight javascript %}
var obj = {
	a: "Hello World",
	b: 42,
	c: true
};
{% endhighlight %}

We can access object properties either using dot notation or bracket notation.

{% highlight javascript %}
console.log(obj.a); // "Hello World"
console.log(obj.b); // 42
console.log(obj.c); // true

console.log(obj["a"]); // "Hello World"
console.log(obj["b"]); // 42
console.log(obj["c"]); // true
{% endhighlight %}

Bracket notation is useful when a property name has special characters in it, for example obj["hello world!"]

This type of property is often referred to as a "key" when accessed with bracket notation

The bracket notation requires either a variable or a string literal as the key

String literals can be wrapped in either single or double quotes.

Bracket notation is useful to access a property/key whose name is held in another variable, e.g.

{% highlight javascript %}
var obj = {
	a: "hello world",
	b: 42
};

var b = "a";

console.log(obj[b]); 	// "hello world"
console.log(obj["b"]); 	// 42
console.log(obj.b); 	// 42
{% endhighlight %}
