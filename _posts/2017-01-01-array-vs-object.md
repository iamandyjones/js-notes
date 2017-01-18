---
layout: post
---

Whilst arrays could be used as a normal object with its own named properties

And an object could be used like an array by naming the properties/keys numerically 1: value, 2: value, 3: value... etc

This is generally discouraged and we should use arrays for numerically positioned values, and objects for named properties

{% highlight javascript %}
var arr = [

	"hello world", 42, true

];

var obj = {

	a: "hello world",
	b: 42,
	c: true
};
{% endhighlight %}