---
layout: post
---

{% highlight javascript %}
function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
{% endhighlight %}

{% highlight javascript %}
setAttributes(elem, {'height': '100px', 'width': '200px'});
{% endhighlight %}
