---
layout: post
---

{% highlight javascript %}

render(){

  return (
  
    {
      {
        SAVING: <p>saving...</p>,
        SUCCESS: <p>success...</p>,
        ERROR: <p>error...</p>,
        READY: <p>ready...</p>
      }[this.state.status]
    }
  
  )

}

{% endhighlight %}

