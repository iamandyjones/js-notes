---
layout: post
---

When referencing a property on an object, if that property does not existd, JS will automatically try and find the property using that objects internal prototype reference (fallback link)

The "Internal prototype reference" linkage from one object to its fallback happens when the object is first created.

{% highlight javascript %}
var foo = {

	a: 42

};

var bar = Object.create(foo);
// Create the bar object using foo and link it to foo

bar.b = "Hello World";
// Create a property on the bar object

bar.b; 	// "Hello World"
bar.a; 	// 42 <-- does not exist on bar object
	// but is delegated (falls back) to foo
	// object because of the internal prototype reference
{% endhighlight %}

The most common way of applying prototypes is for "behaviour delegation" where we intentionally design linked objects to be able to delegate between each other for particular aspects of behaviour.
