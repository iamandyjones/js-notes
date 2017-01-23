---
layout: post
---

The var keyword is used to declare a variable that belongs to the current function scope, or the global scope if at the top level outside of any function.

## HOISTING

When a var is used inside a scope, that variable belongs to the entire scope and is accessible everywhere throughout.

Hoisting is the metaphoric process where this var declaration is moved to the top of its enclosing scope.

The same goes for function declarations, as when declaring a function, the name is essentially just a variable in the outer scope with a function as its value.

{% highlight javascript %}
var a = 2;

foo(); // works because foo() declaration is hoisted

function foo(){

	a = 3;

	console.log(a);	// 3

	var a; // hoisted to top of this function (scope)

}

console.log(a); // 2
{% endhighlight %}

**NB Avoid relying on hoisting to use a variable before its decleration**

However it's much more common and accepted to use hoisted function declarations
