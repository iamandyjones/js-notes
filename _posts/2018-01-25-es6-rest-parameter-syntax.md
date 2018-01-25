---
layout: post
---

With rest parameter syntax, if the last named argument of a function is prefixed with `...`, it becomes an array whose elements are those actually passed to the function.

{% highlight javascript %}

function doSomething(...theArgs){

  console.log(theArgs); // [1, 2, 3, 4, 5]

}

doSomething(1, 2, 3, 4, 5);

{% endhighlight %}

If any previous arguments are mapped to values, the rest parameter collects all subsequent arguments.

{% highlight javascript %}

function doSomething(a, b, ...theArgs){

  console.log(a); // 1
  console.log(b); // 2
  console.log(theArgs); // [3,4,5] 

}

doSomething(1, 2, 3, 4, 5);

{% endhighlight %}

