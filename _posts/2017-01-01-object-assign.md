---
layout: post
---

We can merge the contents of multiple arrays using the ES6 object.assign() method

{% highlight javascript %}
var objOne = { a: 1, b: 2, c: 3 };
var objTwo = { a: 1, b: 2, c: 4 };

var newObj = Object.assign(objOne, objTwo);

console.log(newObj);
// Object {a: 1, b: 2, c: 4}

console.log(objOne);
// Object {a: 1, b: 2, c: 4} <-- the original objOne has been modified
{% endhighlight %}

Object.assign() merges the contents of the one or more source objects into the target object, and returns the merged object.

The target object is the first object passed into the Object.assign() method.

Properites in the target object will be overwritten by those with the same key.

**N.B. If we don't want to mutate any of the source objects, we can pass in an empty object as the source object (first argument) and have this returned instead...**

{% highlight javascript %}
var objOne = { a: 1, b: 2, c: 3 };
var objTwo = { a: 1, b: 2, c: 4 };

var newObj = Object.assign({}, objOne, objTwo);

console.log(newObj);
// Object {a: 1, b: 2, c: 4}

console.log(objOne);
// Object {a: 1, b: 2, c: 3} <-- the original has not been modified
{% endhighlight %}