---
layout: post
---

Using spread syntax allows for shorter code when shallow cloning or merging objects.

{% highlight javascript %}

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

{% endhighlight %}

Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
