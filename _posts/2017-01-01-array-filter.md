---
layout: post
---
The filter method creates a new array with all elements that pass the test (return true) implemented by the provided function...

{% highlight javascript %}
function test(val){
	return val > 2;
}

var arr = [0,1,2,3,4];

var newArr = arr.filter(test);

console.log(newArr); // [3, 4]
{% endhighlight %}

Or terser by passing the test function directly...

{% highlight javascript %}
var newArr = arr.filter(function(val){
	return val > 2;
});

console.log(newArr); // [3, 4]
{% endhighlight %}

Or terser still by using an anonymous arrow function...

{% highlight javascript %}
var newArr = arr.filter(val => val > 2);

console.log(newArr); // [3, 4]
{% endhighlight%}