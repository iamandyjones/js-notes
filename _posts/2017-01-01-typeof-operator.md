---
layout: post
---

The typeof operator allows us to check the type of a value

**Note we are checking the type of the VALUE, not the variable that holds the value**

JS has typed values, not typed variables

{% highlight javascript %}
var a;
console.log(typeof a); // "Undefined"

a = "hello world";
console.log(typeof a); // "string"

a = 42;
console.log(typeof a); // "number"

a = true;
console.log(typeof a); // "boolean"

a = null;
console.log(typeof a); // "object" -- bug

a = undefined;
console.log(typeof a); // "undefined"

a = {b: "c"};
console.log(typeof a); // "object"
{% endhighlight %}

The return value is always one of 6 (seven in ES6 - the 'symbol' type) types.

NB the return value is a strong, i.e. "string", not string.

typeof null returns "object", not "null". This is a bug but not likely to ever be fixed.

setting a = undefined is the same as declaring a variable with no value: var a;



