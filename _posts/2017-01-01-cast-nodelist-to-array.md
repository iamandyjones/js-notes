---
layout: post
---

querySelectorAll returns a nodeList. Whilst this is array-like, it does not include many of the methods provided by Array. Therefore casting a DOM nodelist to an actual array is beneficial if we wish to operate on the data with methods like forEach, map etc.

{% highlight html %}
<div class="item">Item</div>
<div class="item">Item</div>
<div class="item">Item</div>
<div class="item">Item</div>
{% endhighlight %}

{% highlight javascript %}
console.log(document.querySelectorAll('.item')); // NodeList

var nodeArr = Array.prototype.slice.call(document.querySelectorAll('.item'));
console.log(nodeArr); // Array
{% endhighlight %}
