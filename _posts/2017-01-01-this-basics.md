---
layout: post
---

If a function has a "this" reference inside it, that "this" usually refers to an object.

Which object it refers to isn't always obvious, and is determined by how the function was called!

N.B. "this" does not refer to the function itself!!

{% highlight javascript %}
function foo(){

	console.log(this.bar);

}

var bar = "global";

var obj1 = {

	bar: "obj1",
	foo: foo

};

var obj2 = {

	bar: "obj2"

}

foo(); // "global"
// when foo is called, this refers to the global object.
// Therefore it looks for a global bar
// (In strict mode this would be undefined)
{% endhighlight %}

{% highlight javascript %}
obj1.foo(); // "obj1"
// this refers to the foo property of obj1 which is a
// reference to the global foo() function.

// Although this is the same global foo function as above, 
// in this case that function is called from within an object! 

// Therefore "this" refers to the object from which the
// function was called, i.e. obj1

// obj1 has its own property bar, "obj1"
{% endhighlight %}

{% highlight javascript %}
foo.call(obj2); // "obj2"
// The call() method calls a function with a given this
// value and arguments provided individually.

// Therefore the global foo() function is called within
// the context of obj2.

// This means "this" refers to obj2 and this.bar therefore
// refers to obj2.bar, which has the value: "obj2"
{% endhighlight %}

{% highlight javascript %}
new foo(); // undefined
// Because "new" calls the function in the context of
// a brand new empty object, there is no property "bar"
// and therefore returns undefined
{% endhighlight %}

**TAKEAWAY - to determine what "this" refers to, examine how the function in question was called. It will be one of the 4 ways shown above!**