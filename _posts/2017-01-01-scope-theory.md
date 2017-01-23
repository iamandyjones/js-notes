---
layout: post
---

Scope is a set of rules that defines where and how a variable can be looked up.

This looking up may be for 2 purposes: 

1. Assigning a value to the variable (left-hand-side LHS reference)
2. Or retrieving the value of a variable (right-hand-side RHS reference)

LHS references occur either by using = to assign a value, or by passing arguments to function paramters.

{% highlight javascript %}
a = 2; // Assignment, LHS reference
{% endhighlight %}

Or...

{% highlight javascript %}
function foo(a){

	console.log(a); // 2 <-- function assignment

}

foo(2);
{% endhighlight %}

Both LHS and RHS references start in the currently executing scope, and make their way up the nested scope, stopping as soon as they find the identifier they need.

This continues until they reach the top (global scope) where they either find the reference or not and the process stops.

If they don't find the identifier they need, i.e. a variable doesn't exist in any scope then...

- For LHS assignment, the variable is automatically created as a global variable (NB in strict mode an error is thrown instead to prevent automatic implictly-created globals)
- For RHS retrieval of a value, a ReferenceError is thrown
