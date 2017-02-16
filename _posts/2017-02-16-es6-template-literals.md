---
layout: post
---

ES6 introduces template string literals, which enable features such as embedded expressions and string formatting. Template literals use the back ticks rather than single or double quotes.

{% highlight javascript %}
var greeting = `Hello World!`;
{% endhighlight %}

# String Substitution

Template strings contain placeholders for string substituiton using ${ } syntax. We can embed any valid javascript expression...

{% highlight javascript %}
var name = "Andy";
console.log(`Hi, ${name}!`);
{% endhighlight %}

{% highlight javascript %}
var a = 10;
var b = 20;
console.log(`The total is ${a+b}`);
{% endhighlight %}

{% highlight javascript %}
function text(){
  return "Here is some text";
}
console.log(`foo ${text()} bar`);
{% endhighlight %}

{% highlight javascript %}
var person = {name: "Andy"};
console.log(`Hello ${person.name.toUpperCase()}!`);
{% endhighlight %}

# Multiline String

Any whitespace inside a template string will be considered part of the string.
{% highlight javascript %}
console.log(`string text line 1
string text line 2`);
{% endhighlight %}

# Tagged Templates

Putting a function name in front of a template literal calls that function, passing in an array of string literals plus the substitution values, which can then be processed as needed.
{% highlight javascript %}
function doStuff(strings, name){
  var str0 = strings[0];
  var str1 = strings[1];
  var upperName = name.toUpperCase();
  return str0 + upperName + str1;
}
var name = "Andy";
console.log(doStuff`My name is ${name}!`);
{% endhighlight %}
