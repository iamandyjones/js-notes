---
layout: post
---

{% highlight javascript %}
function reducer(state, action){

    if (action.type === "UP") {

        return state + action.amount;

    } else if (action.type ==="DOWN") {

        return state - action.amount;

    } else {

        return state;

    }

}
{% endhighlight %}

{% highlight javascript %}
function createStore(reducer){

    var state = 1;

    var getState = function(){
        return state
    };

    var dispatch = function(action){
        state = reducer(state, action)
    };

    return {
        getState: getState,
        dispatch: dispatch,
    };

}

var theStore = createStore(reducer);
{% endhighlight %}

{% highlight javascript %}
var testAction = {

    type: "UP",
    amount: 2,

};

var testActionAlt = {

    type: "DOWN",
    amount: 1,

};

theStore.dispatch(testAction);
console.log(theStore.getState()); // 3

theStore.dispatch(testActionAlt);
console.log(theStore.getState()); // 2
{% endhighlight %}

The reducer function is responsible for performing operations on state

It accepts 2 arguments: the current state and the action to perform

It checks the value of the action received, and returns the modified state based on the rules of the action

In order to trigger the reducer function to modify state, the app first needs to dispatch an action to the store (all modifications are done by the store)

The reducer function that handles the operations can only access state from inside the store, it needs to be passed into the store

The store object is first created by calling the CreateStore function. var store = createStore(reducer)

The createStore function accepts one argument, the reducer function to pass in

By passing the reducer function into the store, it can be invoked within the context of the store, and therefore has access to the current state (which is managed by the store)

The store is useless until specific methods within it are triggered, for example retrieve the current state, or dispatch and action to the store

The store returns an object that maps 2 internal methods: getStae and dispatch, making these methods accessible outside of the store itself

We can then call these methods using dot notation, e.g. store.dispatch(action), store.getState();

The dispatch method accepts one argument, the action to perform.

The action argument is in the form of an object which should include a type, plus any other optional key:value pairs required by the reducer function to perform the necssary operations

The dispatch function then sets the state variable within the store to the return value of the reducer function (that we originally passed into the store).

Remember the reducer function expects 2 arguments: the current state: which we get from the private state var inside the store, and the action: which is pased in from store.dispatch(action)

Also note that the dispatch function doesn't return anything. It is purely responsible for sending a notification to the store with no expectation on when or how that action will be performed.

At this stage the necessary operations have been performed on the private state variable within the store, but (unless we call store.getState() manually) our app is none the wiser


