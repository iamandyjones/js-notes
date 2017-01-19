---
layout: post
---

ES6 introduces a new keyword "let" that sits alongside var as a way to declare variables.

The let keyword is different to var in that it attaches the variable declaration to the scope of whatever block (usually pair of { }) its contained within.

{% highlight javascript %}
(function(){ 

"use strict";

var foo = true;

if (foo) {

	var bar = foo * 2;
	let baz = foo * 2;

}

console.log(bar); // 2
console.log(baz); // "ReferenceError: baz is not defined

})();

{% endhighlight %}

Using the let keyword is somewhat implicit. It requires close attention to detail to which blocks have vars scoepd to them, and can cause confusion if blocks are moved around, nested etc as code evolves. This is because there may be hidden reliances on variables that are function or globally scoped.

One way to combat this is to be more explicit and use explicit blocks for block scoping to make it more obvious...

{% highlight javascript %}

var foo = true;

if (foo) {

	{ // <-- explicit block
		let baz = foo * 2;
	}

}

console.log(baz); // "ReferenceError: baz is not defined

{% endhighlight %}

Above we create an arbitrary block for the let declaration to bind to by adding the extra { } pair.

## LET AND HOISTING

Unlike var, declarations made with let will not hoist to the entire scope of the block they appear in.

I.e. these declarations will not exist in the block until the point they are actually declared.

{% highlight javascript %}

{
   console.log( bar ); // ReferenceError!
   let bar = 2;
}

{% endhighlight %}