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

Or with ES6 classes...

{% highlight javascript %}
class MyComponent extends React.Component {

    /* ... */

};

MyComponent.defaultProps = { value: 500 } 
{% endhighlight %}

Or using experimental class properties syntax (requires a transform, included within create react app)...

{% highlight javascript %}
class MyComponent extends React.Component {

    static defaultProps = {
        value: 500
    };

};
{% endhighlight %}

The component is now operational regardless of whether a prop is passed in...

{% highlight javascript %}
<Component /> // Logs 500
<Component value="600" /> // Logs 600 
{% endhighlight %}
