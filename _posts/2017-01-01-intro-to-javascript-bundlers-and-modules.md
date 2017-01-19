---
layout: post
---

A module in software development is a self-contained component of a system that is responsible for some particular part of functionality.

Typically a module would expose a limited interface (set of functions) to the rest of the system, it's public methods.

In React, individual components can be thought of as modules.

Ideall each component would live in its own file, and whilst it may include various internal helper functions within that file, it would only return the component itself.

Whilst ES6 introduces native modules, browser support is still lacking.

In order to make use of ES6 modules, extra tooling is required, enter JS bundlers.

JS bundlers allow us to make use of modular ES6 javascript that works in the browser, now.

There are a number of bundlers out there, though the React community seems to have settled on Webpack.
