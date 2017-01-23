---
layout: post
---

To protect variables and functions from polluting the global scope, we can wrap code in a function, thereby creating scope

This forms the base of common patterns when creating modules - use function wrappers to create scope and "protection"

{% highlight javascript %}
function foo(){

	var a, b, c;

	function bar(){

		// Do something

	}

	bar();

}

foo();
{% endhighlight %}

The variables a,b, and c, along with the function bar() are within the scope of foo() and not accessible in the global scope.

Whilst this is useful, there are a couple of issues:

- we have declared a named function, foo() which itself is polluting the global scope
- we have to manually trigger the foo() function, this extra step is just so we can run the code we're really interested in that's inside the function wrapper.

Instead we can use self enclosed, immediately invoked function expressions...

This solves the 2 problems, the function wrapper does not enter the global scope, and we don't need to manually trigger it to run.

{% highlight javascript %}
(function foo(){ // Treated as function expression, not declaration

	// identifier "foo" exists only inside itself,
	// not the outer (global) scope

	var a, b, c;

	function bar(){

		// Do something

	}

	bar();

})();
{% endhighlight %}