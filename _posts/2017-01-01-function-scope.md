---
layout: post
---

The primary way scope is created is by declaring a new function.

Each function declared creates a new scope for itself.

Variables therefore belong to the function, and can be used and reused throughout the entirety of the function, including within any nested scopes.

## HIDING IN SCOPE

Function scope can be used to "hide" variables and functions.

This is common when defining an API for a module/object - only return/expose what is minimally required and restrict access to everything else.

{% highlight javascript %}
function module(a){

	console.log(moduleHelper(a));

}

function moduleHelper(a){

	return a-b;

}

var b = 5;

console.log(b); // 5
moduleHelper(10); // 5
module(10); // 5
{% endhighlight %}

Because in the above scenario var b and moduleHelper() are actually private to module and therefore shouldn't be in the outer (global) scope, we can rework the scope tree to restrict external access to these, as below... 

{% highlight javascript %}
function module(a){

	var b = 5;

	function moduleHelper(a){

		return a-b;

	}

	console.log(moduleHelper(a));

}

console.log(b); // ReferenceError, b is not defined
moduleHelper(10); // ReferenceError: moduleHelper is not defined
module(10); // 5
{% endhighlight %}

