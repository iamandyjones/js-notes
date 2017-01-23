---
layout: post
---

{% highlight javascript %}
function reducer(state, action){

    if (action.type === "UPDATE_REDIRECT") {

        return { redirectURL: action.url }

    } else {

        return state;

    }

}
{% endhighlight %}

{% highlight javascript %}
function createStore(reducer, initialState){

    var state = initialState;

    var listeners = [];

    var subscribe = function(listener){
        listeners.push(listener);
    };

    var getState = function(){
        return state
    };

    var dispatch = function(action){
        state = reducer(state, action);
        listeners.forEach(function(listener){
            listener();
        });
    };

    return {
        subscribe: subscribe,
        getState: getState,
        dispatch: dispatch,
    };

}

var initialState = { redirectURL: '' }

var theStore = createStore(reducer, initialState);
{% endhighlight %}

{% highlight javascript %}
var listenerFunction = function(){
    console.log(theStore.getState());
}

theStore.subscribe(listenerFunction);
{% endhighlight %}

{% highlight javascript %}
var testAction1 = {
    type: "UPDATE_REDIRECT",
    url: "/first-url"
};

theStore.dispatch(testAction1);

var testAction2 = {
    type: "UPDATE_REDIRECT",
    url: "/second-url"
};

theStore.dispatch(testAction2);

var testAction3 = {
    type: "UPDATE_REDIRECT",
    url: "/third-url"
};

theStore.dispatch(testAction3);
{% endhighlight %}

The reducer function is responsible for performing operations on state

It accepts 2 arguments: the current state and the action to perform

It checks the value of the action received, and returns the modified state based on the rules of the action

In order to trigger the reducer function to modify state, the app first needs to dispatch an action to the store (all modifications are done by the store)

The reducer function that handles the operations can only access state from inside the store, it needs to be passed into the store

The store object is first created by calling the CreateStore function. var store = createStore(reducer, initialState)

The createStore function accepts two arguments, the reducer function to pass in, and the structure of the initial state

By passing the reducer function into the store, it can be invoked within the context of the store, and therefore has access to the current state (which is managed by the store)

In addition to keeping track of state, the store also manages an array of listener functions - functions which will be invoked whenever the state changes.

Listeners are registered via the subscribe method exposed by the store.

The store is useless until specific methods within it are triggered, for example retrieve the current state, or dispatch and action to the store

The store returns an object that maps 3 internal methods: getState, dispatch and subscribe, making these methods accessible outside of the store itself

We can then call these methods using dot notation, e.g. store.dispatch(action), store.getState(), store.subscribe()

The dispatch method accepts one argument, the action to perform.

The action argument is in the form of an object which should include a type, plus any other optional key:value pairs required by the reducer function to perform the necssary operations

The dispatch function then sets the state variable within the store to the return value of the reducer function (that we originally passed into the store).

Remember the reducer function expects 2 arguments: the current state: which we get from the private state var inside the store, and the action: which is pased in from store.dispatch(action)

Also note that the dispatch function itself doesn't return anything. It is purely responsible for sending a notification to the store with no expectation on when or how that action will be performed.

Therefore at this stage the necessary operations have been performed on the private state variable within the store, but (unless we call store.getState() manually) our app is none the wiser

The next step is for the dispatch function to loop through and invoke all registered listener functions. 

In doing so, we ensure any logic contained within each listener function is run every time a dispatch action is fired, i.e. state is changed.

This approach of registering callback functions (listeners) via a subscription model to allow views to immediately update is know as the Observer Pattern.
