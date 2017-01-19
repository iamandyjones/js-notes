---
layout: post
---

Comparing values always results in a boolean (true or false), regardless of what value types are being compared

Coercion is the process of converting types.

There are 2 tyes of Coercion:

## Explicit:
It's obvious to see that a conversion from one type to another will occur. E.g.

{% highlight javascript %}
var a = "42";

var b = Number(a);

a; // "42"
b; // 42 --the number
{% endhighlight %}

## Implicit:
When type conversion occurs as a non obvious side effect of some other operation.

{% highlight javascript %}
var a = "42";

var b = a * 1; // "42" implicitly coerced to 42 here

a; // "42"
b; // 42 --the number
{% endhighlight %}