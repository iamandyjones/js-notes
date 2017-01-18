---
layout: post
---

In JS functions are the primary means to create scope, however other units of scope are possible.

In other programming languages, developers are used to block scope, whereas it may seem foreign to JS devs.

Block scoping refers to the desire to declare variables as close, as local, as possible to where they will be used.

{% highlight javascript %}
for (var i=0; i<10; i++) {

	console.log(i);

}
{% endhighlight %}

Above we typically are only concerned with using the var i in that particular for loop (block).

However, we often forget the i var is in fact scoped to the enclosing scope (function or global), not that block, and is therefore polluting the outer scope.

Another example...

{% highlight javascript %}
var foo = true;

if (foo) {

	var bar = foo * 2;
	console.log(bar);

}
{% endhighlight %}

Here we are using the bar variable only in the context of the if statement, so that's where we've declared it.

This is sort of fake block scoping, we've defined it inside the if statement for stylistic reasons.

In actual fact where we've declared the bar variable is not relevant as it will always belong to the parent scope.

Block scoping would allow vars to be using only in the context of the block they exist within, and help to ensure vars are not re-used in confusing ways.

**On the surface JS has no block scoping, until we dig deeper...**
