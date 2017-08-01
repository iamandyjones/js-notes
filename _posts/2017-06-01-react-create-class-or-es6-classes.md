---
layout: post
---

There are two ways to define a React Component, React.createClass or ES6 classes:

{% highlight javascript %}
import React from 'react';

const App = React.createClass({

	render: function(){

		return null;

	}

});

export default App;

{% endhighlight %}

{% highlight javascript %}
import React from 'react';

class App extends React.Component {

	render(){

		return null;

	}

}

export default App;

{% endhighlight %}

The render method is the only required method of a React component and should return either a single child (a React Element), or a falsy value of null or false. If a React Element is returned, it's important to ntoe that this is a virtual representation of a Dom component, not the actual Dom component itself.

N.B. The class' constructor now assumes the role previously filled by componentWillMount:

{% highlight javascript %}
class App extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }
}
{% endhighlight %}
