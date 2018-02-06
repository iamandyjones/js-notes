---
layout: post
---

## Presentation Components

- Dictate how things look
- May contain other presentation and/or container components
- Usually generate DOM markup with associated styles
- Do not interact with stores and store actions
- Don't load or manipulate data themselves
- Receive their data via props
- Trigger behaviours and store actions via callback props
- May have own state if concerned with the component UI itself
- Are usually written as stateless functional components

## Container Components

- Dictate how things work
- May contain other presentation and/or container components
- Don't generate DOM markup or have associated styles
- Pass data and bahviour to other presentation or container components via props
- Call store actions and make these available to presntation components via callback props
- Often have state to manage data and behaviour

## Refs

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
https://gist.github.com/chantastic/fc9e3853464dffdb1e3c
