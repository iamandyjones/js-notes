---
layout: post
---

When declaring a function as below, the function name is essentially just a variable in the outer enclosing scope that's given a reference to the function being declared.

Therefore the function itself is just a value.

{% highlight javascript %}
function foo(){
	
}
{% endhighlight %}

Because a function can be a value, it can be assigned to variables like so...

Here an "anonymous function" expression is assigned to foo as the function has no name

{% highlight javascript %}
var foo = function(){

}
{% endhighlight %}

Here a "named function" expression is assigned to the variable x

{% highlight javascript %}
var x = function bar(){

}
{% endhighlight %}
