---
layout: post
---

When the ref attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument.

This means we can use the ref callback to store a reference to a particular dom node, and subsequently use it with the native DOM api.

{% highlight javascript %}
componentDidMount(){
  
  console.log(this.myDiv); // gives us the underlying dom element

}

render(){		

      return (

         <div className="my-div-class" ref={(el) => this.myDiv = el}>

          </div>

      )

 }
{% endhighlight %}

React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.
