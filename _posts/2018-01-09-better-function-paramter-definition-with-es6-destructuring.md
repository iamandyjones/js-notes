---
layout: post
---

It is often more favourable to accept a single object with multiple properties as a function parameter instead of forcing consumers of our API to remember the order of many individual parameters. For example when passing a configuration object into a function.

We can use ES6 destructuring to avoid repeating this single parameter object whenever we need to extract a value.

## ES5 way...

{% highlight javascript %}
function myFunc(options){

  const name = options.name;
  const age = options.age;

}

myFunc({name: "Bob", age: "30"});
{% endhighlight %}

## ES6 way...

{% highlight javascript %}
function myFunc({name, age}){

  console.log(name); // "Bob"
  console.log(age); // 30

}

myFunc({name: "Bob", age: 30});
{% endhighlight %}

A main reason for using configuration options in this way is so that the consumer of the API only has to pass in the options they want.

Normally we would therefore need to first check if a value is undefined:

{% highlight javascript %}
function myFunc(options){

  const name = options.name === undefined ? 'Default Name' : options.name;
  const age = options.age === undefined ? 25 : options.age;

  console.log(name); // "Bob"
  console.log(age); // 25

}

myFunc({name: "Bob"});
{% endhighlight %}

ES6 destructuring allows us to set defaults and avoid having to manually check if values are undefined:

{% highlight javascript %}
function myFunc({name = "Default Name", age = 25}){

  console.log(name); // "Default Name"
  console.log(age); // 30

}

myFunc({age: 30});
{% endhighlight %}

In some cases, all of the default values may be sufficient and we may not want to pass any configuration into the function:

{% highlight javascript %}
function myFunc({name = "Default Name", age = 25}){

  console.log(name);
  console.log(age);

}

myFunc(); // Error!
{% endhighlight %}

The problem with this is that the configuration object doesn't exist, it is therefore not possible to destructure the properties of an undefined object.

The way round this is to set a default for the configuration object itself, with the following pattern:

{% highlight javascript %}
function myFunc({name = "Default Name", age = 25} = {}){

  console.log(name); // "Default Name"
  console.log(age); // 25

}

myFunc();
{% endhighlight %}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
