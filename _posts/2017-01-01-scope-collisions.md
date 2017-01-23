---
layout: post
---

A benefit of hiding variables and functions inside a scope is to avoid collisions when multiple identifiers ue the same name despite having different intended usages.

{% highlight javascript %}
function foo(){

	function bar(a){

		console.log(a);
		i = 11;
		// This stops the for loop running after the
		// first iteration as this assignment of i
		// overwrites the i used in the for loop that's
		// within the scope of foo()

	}

	for(var i=0; i < 10; i++){

		bar(i);

	}

}

foo();
{% endhighlight %}

An easy fix is to declare with var i inside bar() to restrict access to this i to that function only, i.e. it won't overwrite the value of i in the parent foo() function

Therefore the for loop will continue to run

A common way to avoid collisions is by using a global namespace pattern...

{% highlight javascript %}
var myLibrary = {

	property: "value",

	methodOne: function(){

		console.log('method one');
	},

	methodTwo(){

		console.log('method two');

	}

}
{% endhighlight %}

This pattern assigns a suitably uniquely named variable to the global scope.

This takes the form of an object, with all specific functionality being exposed as properties of that object (namespace).

This means the variables and functions do not exist in the global scope themselves and instead have to be accessed via the object (namespace)

{% highlight javascript %}
myLibrary.methodOne(); // 'method one'
methodOne(); 
// ReferenceError, this function is protected as it
// exists only as a property of the  "myLibrary" object,
// not as a global method itself
{% endhighlight %}


