---
layout: post
---

## Utilities

{% highlight javascript %}
const parseJSON = response => response.json();

const handleErrors = response => {

    if (response.ok) {
        return response;
    }

    return Promise.reject(new Error(response.status));

}
{% endhighlight %}

## Fetch

{% highlight javascript %}
const fetchJson = endpoint => {

	return fetch(endpoint, 
		headers: {
        	Accept: 'application/json',
    	}
	)
	.then(handleErrors)
	.then(parseJSON)

}

fetchJson(url)
.then(data => console.log(data))
.catch(err => console.log(err));
{% endhighlight %}

## Fetch Retry

{% highlight javascript %}
const fetchRetry = (endpoint, n=5) => {

    return fetch(endpoint, 
		headers: {
			Accept: 'application/json',
		}
	)
    .then(handleErrors)
    .then(parseJSON)
    .catch(error => {

        console.log(error, 'Retrying in 2 seconds...');

        if(n===1){
            return Promise.reject();
        }

        return new Promise(resolve => {
            setTimeout(() => {
              resolve(fetchRetry(endpoint, n-1));
            }, 2000);
        });

    });

}

fetchRetry(url)
.then(data => console.log(data))
.catch(err => console.log(err));
{% endhighlight %}
