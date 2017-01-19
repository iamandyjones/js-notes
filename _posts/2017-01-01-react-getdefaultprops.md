---
layout: post
---

getDefaultProps() allows us to specify some default props that will be used in the absence of any being passed into the component

This allows us to set a fallback value for the prop rather than checking if it is undefined etc

{% highlight javascript %}
module.exports = React.createClass({

    getDefaultProps: function(){

        return {value: 500}

    },

    render: function(){

        console.log(this.props.value);

    }

});
{% endhighlight %}

The above will now work regardless of whether a prop is passed into the component...

{% highlight javascript %}
<Component /> // Logs 500
<Component value="600" /> // Logs 600 
{% endhighlight %}
