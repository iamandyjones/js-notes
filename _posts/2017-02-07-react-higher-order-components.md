---
layout: post
---

In some circumstances, we may want to share logic across components. Whilst sometimes it makes sense to abstract this logic into separate utility functions which components can import, there are cases where this isn't appropriate. 

For example if the logic is heavily tied to component lifecycle methods and deserves to be defined within the component itself.

However if we then want to use this same logic in multiple components, we can end up with duplictaed code throughout a large number of components.

Higher Order Components allow us to abstract this logic into one place and have any number of components share this logic.

With Hugher Order Components, we write a function that creates a component, and also accepts a child component as its argument.

{% highlight javascript %}
function withCommonStuff(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        some: 'thing',
      };
    }

    componentDidMount() {
      // Do some shared logic on mount      
    }

    componentWillUnmount() {
      // Do some shared logic on unmount
    }

    render() {      
      // Pass through any additional (injected) props
      return <WrappedComponent 
              injectedProp={this.state.some} 
              {...this.props} />;
    }
  };
}
{% endhighlight %}

{% highlight javascript %}
const ComponentWithCommonStuff = withCommonStuff(OriginalComponent);
{% endhighlight %}

Higher Order Components are pure, they don't modify the input component, nor do they use inheritance to copy its behaviour. Instead it composes the original component by wrapping it in a container.

Note the wrapped component receives all the props of the container, plus any other new props that we pass along. The only communication between the container and wrapped component is via props.

The function that generates the wrapper component is just a normal function, and we can pass it any number of arguments to make it configurable.

## HOC's Vs Container Components

Container Components are used to separate responsibility between high level and low level components. Container Components handle things like data subscription and state management, and pass along props to components that manage UI rendering. 

HOC's use containers as part of their implementation, and can be thought of as a special Container components which is parameterised.

## More

See- https://facebook.github.io/react/docs/higher-order-components.html
