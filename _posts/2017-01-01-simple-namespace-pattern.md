---
layout: post
---

The following line is often used to create a "namespace" in JS - under which variables and functions can be created without polluting the global namespace.

{% highlight javascript %}
var app = app || {};
// Set the value of app to its current value,
// or if it's falsy then set it to an empty object

// The reason for first checking if app already has a value,
// is so that we augment the existing value, not replace it

// In doing so we can use the same namespace across multiple
// files and it doesn't matter what order they are laoded

(function(){

	'use strict';

	app.LIMIT = 10;
	app.TOTAL_NUM = 100;

	function init(){

		console.log(app.LIMIT, app.TOTAL_NUM);

	};

	init();

})();

console.log(app.LIMIT); // 10
console.log(init);
// Reference error, init is not defined as
// private to the IIFE
{% endhighlight %}

**New File...**

{% highlight javascript %}
var app = app || {};
// This time app already exists so we set it
// to the existing value from the file above
// rather than an empty object.

(function(){

	'use strict';

	app.NEW_VALUE = 20;

	function myFunction(){

		console.log(app.NEW_VALUE);

	};

	myFunction();

})();

console.log(app.LIMIT); // 10 <-- this is set in the previous file
console.log(app.NEW_VALUE); // 20 <-- this is set in this file
{% endhighlight %}
