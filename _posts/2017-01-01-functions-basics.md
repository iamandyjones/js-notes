---
layout: post
---

Function is a subtype of the built in object type.

{% highlight javascript %}
function foo(){

	return 42;

}

foo.bar = "hello world";

console.log(typeof foo); // "function"
console.log(typeof foo()); // "number"
console.log(typeof foo.bar); // "string"
{% endhighlight %}

Whilst functions can have properties like a normal object: foo.bar, function object properties are only used in limited cases.

