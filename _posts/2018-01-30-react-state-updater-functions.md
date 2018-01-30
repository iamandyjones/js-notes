---
layout: post
---

If we need to rely on the value of state to calculate the next value, we often see:

{% highlight javascript %}

this.setState({toggle: !this.state.toggle});

{% endhighlight %}

HOWEVER, the React docs tell us that this is unreliable because `this.state` may be updated asynchronously and can therefore not be considered reliable for calculating the next state.

Instead, the `setState` can also accept an updater function instead of an object as the first argument. This updater function receives previous state and props as arguments, both of which are guaranteed to be up-to-date.

Therefore the previous example is better constructed as:

{% highlight javascript %}

this.setState((prevState, props) => {
  return {toggle: !prevState.toggle}
});

{% endhighlight %}

In addition, because `setState` may delay and/or batch updates, reading state straight after a call to `setState` is not always reliable. 

Instead we should use the `componentDidUpdate` lifecycle method, or alternatively make use of the `setState` callback:

{% highlight javascript %}

this.setState((prevState, props) => {
  return {toggle: !prevState.toggle}
}, () => {
  // Now we can reliably reference this.state
});

{% endhighlight %}

Ref: https://reactjs.org/docs/react-component.html#setstate
