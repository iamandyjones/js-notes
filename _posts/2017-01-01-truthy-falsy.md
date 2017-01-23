---
layout: post
---

The concept of truthy and falsy relates to when a non boolean value is coerced to a boolean; does it become true or false..?

JS has a set list of FALSY values as follows:

{% highlight javascript %}
"" // empty string
0, -0, Nan // invalid number
null, undefined
false
{% endhighlight %}

Anything not on this list is TRUTHY, for example:

{% highlight javascript %}
"hello"
42
true
[ ], [ 1, "2", 3, 4 ] // arrays
{ } { a: 42 } // objects
function foo(){..} // functions
{% endhighlight %}

**NB a non-boolean value only follows this truthy/falsy coercion if it's ACTUALLY coerced to a boolean!**
