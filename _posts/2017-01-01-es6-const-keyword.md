---
layout: post
---

As well as the "let" keyword, ES6 introduces the "const" keyword to declare variables, which is also scoped at block level.

The difference is the value of a variable declared with const is fixed and cannot be changed.

Any attempt to change it will throw an error.

{% highlight javascript %}
var foo = true;

if(foo){

	var a = 2;
	const b = 3; // block scoepd to the containing if block

	a = 3; // Works fine
	b = 4; // Error, not allowed to change value of b

}

console.log(a); 
// 3

console.log(b);
// ReferenceError. Not available outside
// of the block it's scoped to.
{% endhighlight %}