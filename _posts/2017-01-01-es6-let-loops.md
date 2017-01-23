---
layout: post
---

ES6 let keyword proves especially useful when considering the fact that in a traditional for loop, variables intended only for that loop actually belong to the outer scope...

{% highlight javascript %}
for(var i=0; i<10; i++){

	console.log(i);
}

console.log(i);
{% endhighlight %}

Whilst we only care about using i within the context of the for loop, it's actually attached to the enclosing scope, potentially polluting it.

We can use let instead...

{% highlight javascript %}
for(let i=0; i<10; i++){

	console.log(i);

}

console.log(i); // ReferenceError
{% endhighlight %}

Above, the let keyword used to declare the i variable in the for loop header binds that variable to the body of the loop only.

In actual fact, it re-binds it to each iteration of the loop, automatically re-assigning it the value from the end of the previous loop iteration.