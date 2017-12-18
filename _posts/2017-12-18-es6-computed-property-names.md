---
layout: post
---

ES6 introduces computed property names within object literals. The use of square brackets allows expressions to be computed and used as property names.

This means an approach such as:

{% highlight javascript %}

const label = "Age";

const person = {};

person[label] = 20;

{% endhighlight %}

Can instead be written as:

{% highlight javascript %}

const label = "Age";

const person = { [label]: 20 };

{% endhighlight %}
