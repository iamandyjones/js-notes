---
layout: post
---

ES6 destructuring assignment syntax allows us to unpack values from arrays, or properties from objects, into variables.

The object and array literal expressions provide an easy way to create ad hoc packages of data.

## Array Destructuring

{% highlight javascript %}
var foo = ['one', 'two', 'three'];

var [a, b, c] = foo;

console.log(a); // "one"
console.log(b); // "two"
console.log(c); // "three"

{% endhighlight %}

A variable can be assigned its value via destructuring after it has been declared:

{% highlight javascript %}
var foo = ['one', 'two', 'three'];

var a, b, c;

[a, b, c] = foo;

{% endhighlight %}

Default values can be specified in case the value unpacked from the array is undefined.

{% highlight javascript %}
var foo = [1, 2];

var [a=2, b=3, c=4] = foo;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 4

{% endhighlight %}

Parsing an array from a returned function

{% highlight javascript %}

function func(){
  return [1, 2]
}

var [a, b] = func();

console.log(a); // 1
console.log(b); // 2

{% endhighlight %}

## Object Destructuring

{% highlight javascript %}

var obj = { a: 'foo', b: 2 };

var {a, b} = obj;

console.log(a); // "foo"
console.log(b); // 2

{% endhighlight %}

A variable can be assigned its value via destructuring after it has been declared, BUT note the round braces:

{% highlight javascript %}

var a, b;

({a, b} = { a: 'foo', b: 2 });

{% endhighlight %}

The round braces are required when using destructuring without assignment as without the object literal on the left is considered a block instead.

The round braces must be followed by a semi colon or it may be used to execute a function on the previous line.

Assigning to new variable names:

{% highlight javascript %}

var obj = { a: 'foo', b: 2 };

var { a: c, b: d } = obj;

console.log(c); // "foo"
console.log(d); // 2

{% endhighlight %}

Passing default values:

{% highlight javascript %}

var { a = 'foo', b = 2 } = { a: 'bar' };

console.log(a); // "bar"
console.log(b); // 2

{% endhighlight %}

