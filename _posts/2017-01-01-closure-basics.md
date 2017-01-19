---
layout: post
---

Closure is a way to remember, and access a functions scope (its variables) even after the function has finished running

{% highlight javascript %}
function makeAdder(x){

	// x becomes an inner variable

	function add(y){

		// this function has access to both x and y
		return y + x;

	};

	return add;
	// makeAdder returns a reference to the inner add function
	// which can remember what the value of x was at the time
	// when makeAdder was called

};

var addOne = makeAdder(1); 
// addOne becomes the return value of makeAdder, i.e. add(y).
// This particular reference to add() is able to remember that
// when it was returned the value of x was 1.
{% endhighlight %}

So effectively the addOne variable waiting to be called would be equal to...

{% highlight javascript %}
var addOne = function(y){

	return y + 1;

}

addOne(4); // 5

var addTen = makeAdder(10); 
// Likewise the value of addTen becomes the inner add() 
// function with closure over the x variable whose value is 10.
{% endhighlight %}

So effectively the addTen variable waiting to be called would be equal to...

{% highlight javascript %}
var addTen = function(y){

	return y + 10;

}

addTen(25) // 35
{% endhighlight %}

**Even though the logic of the inner function is executed at a completely different time to when the outer makeAdder function ran, it still has memory over what the value of x passed into the outer function was at the time thanks to closure.**

