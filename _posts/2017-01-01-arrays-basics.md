---
layout: post
---
Arrays are objects that hold values (of any type)

However the values are not held in named properties/keys like a normal object, but in numerically indexed positions

JS is zero based so counting starts at 0, not 1

{% highlight javascript %}
var arr = [
	"hello world", 42, true
];

console.log(arr[0]); // "hello world"
console.log(arr[1]); // 42
console.log(arr[2]); // true
{% endhighlight %}

Because arrays are special types of objects, they can also have properties, such as the automatic length property: arr.length

{% highlight javascript %}
console.log(typeof arr); // "object"

console.log(arr.length); // 3
{% endhighlight %}
