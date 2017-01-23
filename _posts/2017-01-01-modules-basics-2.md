---
layout: post
---

{% highlight javascript %}
function Product(){ // Creates scope for Product Module
	
	var productName, productPrice; 
	// Locally scoped variables inaccessible outside

	function addProduct(prodName, prodPrice){ 
		// This function has access to the vars
		// above and also closes over them

		productName = prodName;
		productPrice = prodPrice;

		// Logic to add a new product for example...

		console.log('New prod: ' + productName + ' - £' + productPrice);

	}

	var publicAPI = {

		add: addProduct

	}

	return publicAPI;

}

var item = Product();

item.add("Andy's Product", "9.99");
{% endhighlight %}

When assigning item to an instance of the Product() function, it effectively just became an object (the return value), even though this object only had 1 key which was a reference to the addProduct() function, that function could still user variables in the outer Product() function even though that function had already finished running.

This is because at the time the Product() function first ran, and doLogin() was put into the publuic API, doLogin had access to the outer functions variables, and thanks to closure retained memory of them.


