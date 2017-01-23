---
layout: post
---

When a variable is declared, it is available anywhere in that scope, AS WELL as in any lower/inner scopes.

{% highlight javascript %}
function foo(){

	var a = 1;
	// Available in foo and any nested scopes

	function bar(){

		var b = 2;
		// Available in bar and any nested scopes

		function baz(){

			var c = 3;
			// Available in bax and any nested scopes

			console.log(a, b, c); 
			// 1 2 3 -- all are available here

		}

		baz(); // Run the function

		console.log(a, b); 
		// 1, 2 -- c is not available here

	}

	bar(); // Run the function

	console.log(a); 
	// 1 -- only a is available here

}

foo();
{% endhighlight %}

If we try and access a variable's value in a scope where it is not available, we get a referenceError.

If we try and set a variable that hasn't been declared, it will either be created in the top level global scope (bad!), or in Strict mode we'll get an error.

{% highlight javascript %}
function test(){

	d = 10;
	// This variable is not formally declared (var keyword)
	// so it automatically goes into global scope (bad!)
	// rather than scope of test()

}

test();

console.log(d); 
// Despite being set in test() it is available
// here as it entered global scope, see comment above.
{% endhighlight %}

**ALWAYS FORMALLY DECLARE VARIABLES**