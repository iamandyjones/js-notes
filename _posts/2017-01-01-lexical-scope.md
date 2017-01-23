---
layout: post
---

Of the 2 types of scope models employed in programming - "lexical" and "dynamic", lexical is the one employed by JS.

Lexical scope is scope that's defined at the time of "lexing" during compilation, i.e. where variables and blocks of scope occur at the time of authoring.

Scope can be nested. Variables are accessible throughout an entire scope block (i.e. even in the nested scopes that exist within it).

{% highlight javascript %}
// Global Scope

function foo(){

	// New scope for foo()

	function bar(){

		// New scope for bar ()

	}

}

foo();
{% endhighlight %}

When looking up a variable, the JS engine starts in the current scope, and works outwards until it finds a reference to what it needs.

It always stops at the first match. Even if the same identifier is specified at multiple layers or the scope tree!

Where the same identifier exists in multiple scope layers, the inner identifier is said to "shadow" the outer identifier.

{% highlight javascript %}
function foo(){

	var a = 1; // The lookup will never reach here

	function bar(){

		var a = 2;
		// this is shadowing the identifier of
		// the same name in the outer scope

		console.log(a);
		// 2 because the lookup first considers
		// the currently executing scope

	}

	bar();

}

foo();
{% endhighlight %}

There are 2 ways to "cheat" lexical scoping in JS: 

eval() - modify existing lexical scope at runtime

with - creates a whole new lexical scope at runtime

Both methods prevent the JS engine's ability to perform optimisations on scope-lookup at compile time.

Don't use either!!!