---
layout: post
---

If statement...

{% highlight javascript %}
if (a == 2){

	// Do something

} else if (a == 10) {

	// Do something else

} else if (a == 20) {

	// Do something else

} else {

	// Fallback action

}
{% endhighlight %}

Switch statement...

{% highlight javascript %}
switch (a) {

	case 2:
		// Do something
		break;

	case 10:
		// Do another thing
		break;

	case 20:
		// Do something else
		break;

	default:
		// Fallback action

}
{% endhighlight %}

Switch statement (with 'fall-through')...

{% highlight javascript %}
switch (a) {

	case 2:
	case 10:
		// Do something (if EITHER 2 OR 10)
		break;

	case 20:
		// Do something else
		break;

	default:
		// Fallback action

}
{% endhighlight %}

Conditional Operator (ternary operator)...

{% highlight javascript %}
var a = 42;

var b = (a > 41) ? "hello" : "World";

// Condition ? If true : If false
{% endhighlight %}

Similar to...

{% highlight javascript %}
if (a > 41){

	b = "hello";

} else {

	b = "world";

}
{% endhighlight %}