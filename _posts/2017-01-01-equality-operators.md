---
layout: post
---

There are 4 equality operators in js:

== (checks for equality with coercion allowed)

=== (checks for equality without allowing coercion, strict equality)

!= (not equal)

!== (strictly not equal)

{% highlight javascript %}
var a = "42";
var b = 42;

console.log(a == b);	
// true, coercion occurs

console.log(a === b);	
// false, coercion not allowed,
// string vs number types.
{% endhighlight %}


