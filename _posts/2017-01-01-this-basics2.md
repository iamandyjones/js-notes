---
layout: post
---

It is crucial to remember that "this" does not refer to the function itself, nor does it refer to the lexical scope of a function!

Instead "this" is a binding that is created when a function is invoked, and what it refers to differs depending on the call-site from where the function is called (not declared)!

In order to establish what "this" refers to we need to find the call site.

In order to find the call site, we should examine the call stack - the stack of functions that have been executed to get us to the current moment in execution.

{% highlight javascript %}
function baz(){

	// call stack is: baz

	bar(); // <- call site for bar

}

function bar(){

	// call stack is: baz -> bar

	foo(); // <- call site for foo

}

function foo(){

	// call stack is: baz -> bar -> foo

}

baz(); // <- call site for baz
{% endhighlight %}

We can manually visualise a call stack by looking at functions in order, like above, but this is tricky and error-prone.

Instead we can use devtools in the browser. Set a breakpoint on the first line of the function from which we want to determine the context of "this", run the code, then check the call stack.
