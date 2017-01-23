---
layout: post
---

{% highlight javascript %}
const Data = [
	{title: 'One'},
	{title: 'Two'},
	{title: 'Three'}
]

const items = Data.map(function(item){

	console.log(item.title)
	
});

const items2 = Data.map(item => console.log(item.title));
{% endhighlight %}

In this example we may want to use other arguments in the callback function passed to .map, for example the index

In this case we'd need to wrap the function arguments in parenthesis, they can only be ommitted if there is just 1 argument.

{% highlight javascript %}
const items2 = Data.map((item, index) => console.log(item.title));
{% endhighlight %}

Similarly if there are no arguments, we would also need to use empty parenthesis...

{% highlight javascript %}
const items2 = Data.map(() => console.log(item.title));
{% endhighlight %}

In the examples above the arrow function body does not need braces around it as it contains only a single statement! 

When the function body contains only one statement with no braces around it, it will automatically return the value derived from that statement, no need to use the keyword "return".

If there is multiple statements in the function body, they should be wrapped in braces...

When braces are used, no value is returned by default and the return keyword should be used.

{% highlight javascript %}
const items2 = Data.map((x, y) => {
	// Statement 1
	// Statement 2
	// ...
});
{% endhighlight %}

If the function body returns a single object literal, wrap the body in parenthesis to prevent the curly braces being interpreted as the function body wrapper...

{% highlight javascript %}
(x) => ({key: x, some: value});
{% endhighlight %}

## KEY RULES...
- For arrow functions with a single parameter, you can omit the parenthesis () around the parameter.
- For arrow functions with no or multiple parameters, wrap the parameters in parenthesis.
- For arrow functions with a single BODY statement, you can omit the braces {} around the statement. The value derived from the statement is automatically returned with no braces.
- For arrow functions with multiple BODY statements, wrap them in curly braces. No value is automatically returned with braces- use the return statement to specify the value.
- If a function BODY contains only a single object literal, wrap the function BODY in parenthesis () to differentiate it from the object literal wrapper.

**NOTE: using an anonymous arrow function has the benefit of binding the "this" value to the enclosing scope!**

See http://www.javascriptkit.com/javatutors/javascriptarrowfunctions.shtml for a useful syntax breakdown