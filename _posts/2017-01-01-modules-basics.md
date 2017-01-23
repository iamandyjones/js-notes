---
layout: post
---

The most common usage of closure in JS is the "module pattern"

Modules allow us define private variables and functions hidden from the outside world,
as well as a public API that is accessible to the outside world

{% highlight javascript %}
function User(){

	var username, password;
	// These variables are restricted to the
	// outer scope of the User() function,
	// inaccessible from outside

	function doLogin(user, pw){ 
		// This function is also restricted to the scope
		// of User() in the same way as variables

		username = user;
		password = pw;

		// Do rest of login stuff
		console.log(username, password);

	}

	var publicAPI = { 
		// Just an object which maps a reference of
		// the doLogin function to a property/key called "login"

		login: doLogin

	};

	return publicAPI; 
	// The only thing returned by the User function
	// is an object with reference to the inner scoped function

}

var andy = User();
{% endhighlight %}

Here an instance of the User function is assigned to the variable andy, and in doing so we generate a whole new version of the User function with its own 
scope and copy of the variables and functions within it (doing this for another user would create a new version separate to andy)

Andy then becomes the return value of the function, which is an object with one key

The value of this key is a reference to the inner doLogin() function, which has closure over the variables available to it at the time it was created, i.e. "username" and "password"

andy is now equivalent to:

{% highlight javascript %}
andy = { login: doLogin } 
// doLogin here being a reference to the inner function
//of User at the time when andy was created, thanks to closure
{% endhighlight %}

Therefore using andy like...

{% highlight javascript %}
andy.login("andy", "password1234");
{% endhighlight %}

...runs the function which is assigned to the login key of the andy object.

This function is a reference to doLogin() at the time when andy was created.

So despite the fact the User function finished running a while ago, thanks to closure this reference to

doLogin() still has access to the username and password variables from at the time they were created. These private variables are then used for whatever private logic within the
doLogin() function.






