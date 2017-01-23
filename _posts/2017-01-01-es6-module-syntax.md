---
layout: post
---

ES6 supports modules using the import/export syntax

**NB If any of the following syntax is confusing refer to:**
http://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281

**NB for a thorough breakdwon of javascript modules refer to:**
http://wesbos.com/javascript-modules/

## NAMED EXPORTS

Inside of 'file.js' we can use "export" to specify a variable that the module should expose...

{% highlight javascript %}
export const sayHi = () => (console.log('Hi'));
export const sayBye = () => (console.log('Bye'));

const saySomething = () => (console.log('Something'));
// This is not avalable for import elsewhere as it is not exported!
{% endhighlight %}

Equivalent to...

{% highlight javascript %}
export var sayHi = function(){

	console.log('Hi')	

}
{% endhighlight %}

Now anywhere we want to use this function we could use "import", and specify which functions we want to import. A common way of doing this is:

{% highlight javascript %}
import { sayHi, sayBye } from './file';

sayHi(); // Hi
sayBy(); // Bye
{% endhighlight %}

Only functions that are exported are available outside of the module. Any functions not exported are unavailable.

To group all functions we'd like to export into one area instead of writing export before every function, we can use the following syntax...

{% highlight javascript %}
const sayHi = () => (console.log('Hi'));
const sayBye = () => (console.log('Bye'));
const saySomething = () => (console.log('Something'));

export { sayHi, sayBye };
{% endhighlight %}

Similarly we can also specify that we'd like to import all functionality from a module instead of listing all the functions, as above...

{% highlight javascript %}
import * as Greetings from './file';

Greetings.sayHi(); // Hi
Greetings.sayBye(); // Bye
Greetings.saySomething(); 
// TypeError: Greetings.saySomething is not a function
{% endhighlight %}

## DEFAULT EXPORT

Instead of named exports, we can also use a Default Export. A module can only have 1 default export.

{% highlight javascript %}
const sayHi = () => (console.log('Hi'));
const sayBye = () => (console.log('Bye'));
const saySomething = () => (console.log('Something'));

const Greetings = { sayHi, sayBye };

export default Greetings;
{% endhighlight %}

Libraries commonly use the above pattern so that users can  import the library in full without needing to specify the individual functions needed...

{% highlight javascript %}
import Greetings from './file';

Greetings.sayHi(); // Hi
Greetings.sayBye(); // Bye
{% endhighlight %}

Some modules will use a mix of both named exports, and a default export. E.g. 

{% highlight javascript %}
import ReactDOM from 'react-dom'; // A default export

ReactDOM.render();
{% endhighlight %}

Or...

{% highlight javascript %}
import { render } from 'react-dom' // A named export

render();
{% endhighlight %}