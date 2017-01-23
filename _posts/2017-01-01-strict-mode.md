---
layout: post
---

Strict mode tightens the rules for certain behaviours and makes our code more safe and optimisable

Strict mode can be "turned on" inside a function, or an entire file.

One major benefit of strict mode is that it disallows automatic global variable decleration by ommitting the var keyword.

{% highlight javascript %}
function foo(){

	"use strict";

	// this code is in strict mode

	function bar(){

		// this code is in strict mode

	}

}

// This code is not in strict mode
{% endhighlight %}

**OR...**

{% highlight javascript %}
"use strict";

function foo(){

	// this code is in strict mode

	function bar(){

		// this code is in strict mode

	}

}

// This code is in strict mode
{% endhighlight %}
