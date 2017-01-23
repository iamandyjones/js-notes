---
layout: post
---

{% highlight javascript %}
"use strict";

var Redux = require('redux');

function reducer(state = {}, action){

    return {

        redirectURL: redirectReducer(state.redirectURL, action),
        tileData: dataReducer(state.tileData, action)

    }

}
{% endhighlight %}

Or the built in way of doing the above with Redux... 

{% highlight javascript %}
var reducer = Redux.combineReducers({

    redirectURL: redirectReducer,
    tileData: dataReducer

});
{% endhighlight %}

{% highlight javascript %}
function redirectReducer(state = '', action){
    
    if (action.type === "UPDATE_REDIRECT") {

        return action.url;

    } else {

        return state;

    }

}
{% endhighlight %}

{% highlight javascript %}
function dataReducer(state = { one: [], two: [] }, action){
    
    switch (action.type) {

        case 'ONE_DATA': {

            var newObject = { one: action.dataSet }
            return Object.assign({}, state, newObject);

        }
        case 'TWO_DATA': {

            var newObject = { two: action.dataSet }
            return Object.assign({}, state, newObject);

        }
        default: {

            return state;

        }

    }

}

module.exports = Redux.createStore(reducer);
{% endhighlight %}

This example uses the Redux library which provides the createStore function.

We pass one argument into Redux, our top level reducer.

We do not pass initial state in as an argument this time, and instead our reducers are configured to handle an undefined state argument and return the initial state themselves.

This approach, rather than setting initial state elsewhere, means the reducers are entirely responsible for ALL logic of a particular part of the state tree.

The reducers do this by using ES6 default parameters - if the state received is undefined, the reducers creates the initial state

The Redux createStore function actually fires a dispatch action right after it is initialised and before it's returned. This triggers our main reducer, and for this first run the initialState is undefined.

Subsequently when the main reducer calls the 2 sub reducers the particular state argument passed in is also undefined.

This first fire is enough for the main reducer to set its initial state to an empty object, and the sub reducers to set their respective state arguments to their default values

Any subseuqent dispatches to the store then references this default state.

This time the logic within our main reducer() has been split out into sub reducers which each consider only a specific portion of the state tree

When a dispatch action is sent to the store, the current state and the action object itself are passed into the main reducer.

Instead of the main reducer performing operations on the state, it simply calls the sub reducers on each portion of the state tree to retrieve the new state.

When the sub reducers are called, the current portion of state relative to them is supplied, along with the original action dispatched to the store.

This action will include the action.type and any associated data necessary to modify the state in response to whichever event initiated the dispatch call.

The sub reducers are then able to manipulate that portion of state only and return a new portion of state accordingly. 

Instead of returnign the entire state object, our sub reducers return only the appropriate portion of state into each state key within the main reducer.

Any React components that have subscribed to our store will have their callback listener functions fired to be notified

Their callback functions can use this.forceUpdate() to force the React component to re-render.

In doing so, any calls to store.getState() within the component render method will subsequently receive the new state!

One final optimsiation that can be made is to use Redux.combineReducers that is built into Redux. This performs exactly like our main reducer, but with much less code.

## Example of subscribing to store...

{% highlight javascript %}

var Store = Redux.createStore(reducer);

...

componentDidMount: function(){

        Store.subscribe( () => ( 
            this.forceUpdate()
        ));
}

...

{% endhighlight %}

## Example of rendering data with store state...

{% highlight javascript %}
render (

    <div>{Store.getState().tileData.one}</div>

)
{% endhighlight %}

## Example of dispatching actions to the store...

{% highlight javascript %}
Store.dispatch({ type: 'UPDATE_REDIRECT', url: this.props.deepLink });
{% endhighlight %}