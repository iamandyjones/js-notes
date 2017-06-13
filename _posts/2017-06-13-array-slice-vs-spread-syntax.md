---
layout: post
---

{% highlight javascript %}

var arr = [1, 2 ,3 ];

var arr2 = arr.slice();
arr2.push(4, 5, 6)

// [1,2,3,4,5,6]

{% endhighlight %}

Or...

{% highlight javascript %}

var arr = [1, 2 ,3 ];

var arr2 = [...arr, 4, 5, 6];

// [1,2,3,4,5,6]

{% endhighlight %}

