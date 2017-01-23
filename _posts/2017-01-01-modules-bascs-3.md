---
layout: post
---

The basic structure of a module is...

{% highlight javascript %}
function Module(){

	// Declare some private variables and functions etc

	// Return a public API object

}

var foo = Module();
// Assign an instance of the module to a variable.
{% endhighlight %}

Alternatively we could use an IIFE...

{% highlight javascript %}
var Module = (function(){

	// Declare some private variables and functions etc

	// Return a public API object

})();
{% endhighlight %}

Module is now our namespace, and is declared in the global scope, any public methods it returns are availble to us outside

Any locally scoped variables and functions are not available, i.e. private methods

{% highlight javascript %}
var Module = (function(){

	var privateMethod = function(){

		// Do some private stuff
		// Private because it's declared...
		// inside the scope of the outer function

	};

})();
{% endhighlight %}

Modules will typically return an object literal to the Module variable

Any methods bound to that object will then be accessible from the modules namespace...

{% highlight javascript %}
var Module = (function(){

	return {

		publicMethodKey: function(){
			// this is now accessible to the outside
			// world via the Module namespace
		}

	}

})();

Module.publicMethodKey();
{% endhighlight %}

The object itself can be returned in various ways...

## Anonymous Object Literal Return

{% highlight javascript %}
var Module = (function(){

	return {

		publicMethodKey1: function(){
			
		},
		publicMethodKey2: function(){
			
		},
		publicMethodKey3: function(){
			
		}

	}

})();
{% endhighlight %}

## Locally Scoped Object Literal

{% highlight javascript %}
var Module = (function(){

	var myObject = {};

	var privateMethod = function(){

	};

	myObject.publicMethodKey1: function(){
			
	};

	myObject.publicMethodKey2: function(){
		
	};

	myObject.publicMethodKey3: function(){
		
	};

	return myObject;

})();
{% endhighlight %}

## Stacked Locally Scoped Object Literal

{% highlight javascript %}
var Module = (function(){

	var privateMethod = function(){
		
	};

	var myObject = {

		publicMethodKey1: function(){
			
		},
		publicMethodKey2: function(){
		
		},
		publicMethodKey3: function(){
		
		}
	};

	return myObject;

})();
{% endhighlight %}

## Revealing Module Pattern

{% highlight javascript %}
var Module = (function(){

	var privateMethod = function(){
		// Private
	};

	var someMethod = function(){
		// Public
	};

	var anotherMethod = function(){
		// Public
	};

	return {
		someMethod: someMethod,
		anotherMethod: anotherMethod
	};

})();
{% endhighlight %}

How to run private logic from public methods (applies to any pattern for returning objects, not just this one)...

The underscore is a naming convention for private methods

{% highlight javascript %}
var Module = (function(){

	var _privateMethod = function(message){
		console.log(message);
	};

	var someMethod = function(text){
		_privateMethod(text);
	};


	return {
		someMethod: someMethod
	};

})();

Module.someMethod('Hello World');
{% endhighlight %}