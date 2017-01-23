---
layout: post
---

The built in js types are:

- string
- number
- boolean
- undefined
- null
- object

They have built-in behaviours exposed as properties and methods.

E.g. 

{% highlight javascript %}
var a = "hello world";
var b = 3.14159;

console.log(a.length); 			// 11
console.log(a.toUpperCase()); 	// "HELLO WORLD"
console.log(b.toFixed(4));		// "3.1416"
{% endhighlight %}

JS allows us to call methods like toUpperCase on simple primitive values like the "hello world" string thanks to object wrappers, or "Natives".

When a primitive value is used like an object, by referencing a property or method, JS automatically "boxes" the value to its object wrapper counterpart.

It's this object wrapper that defines the methods, such as toUpperCase(), on its prototype.

A string primitive has a Strong object wrapper, a number has Number, a boolean has Boolean.