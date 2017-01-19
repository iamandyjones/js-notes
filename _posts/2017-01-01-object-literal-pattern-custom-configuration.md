---
layout: post
---

When using a simple object literal pattern to organise code, it's often useful to override default settings via an init function or alike

Our basic structure may look like:

{% highlight javascript %}
var feature = {

	settings: {

		limit: 5,
		speed: 250,
		container: '.contain'

	},

	init: function(config){

		// The init function accepts an argument
		// that we expect to be an object of
		// custom settings
		
		// First check for the presence of the
		// settings argument and if it's an object
		// merge the contents of this object into
		// our feature.settings default settings
		if (config && typeof config == 'object') {
        	
        	//$.extend(feature.settings, config); // with jquery

        	// or with ES6 Object.assign() ...
        	Object.assign(feature.settings, config); 

    	}

	},

	methodOne: function(){

		// Do stuff

	},

	methodTwo: function(){

		// Do stuff

	}

};

console.log(feature.settings); 
// Object {limit: 5, speed: 250, container: ".contain"}

feature.init({limit: 10, speed: 500});

console.log(feature.settings);
// Object {limit: 10, speed: 500, container: ".contain"}
{% endhighlight %}