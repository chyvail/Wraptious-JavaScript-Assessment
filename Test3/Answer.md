# NgRx

NgRx is a powerful state management library for Angular applications that helps manage and maintain the state in a predictable manner. NgRx is inspired by the Redux pattern. NgRx excels in managing complex states, making it ideal for applications with a lot of user interactions and multiple data sources.

## Core Components of NgRx

NgRx is made up of 5 main components - Store, Actions, Reducers, Selectors, and Effects.

**Store:** The Store is the central repository that holds the entire application state. Components can select slices of state from the store and dispatch actions to modify the state.

**Actions:** Actions are how the application communicates with NgRx to tell it what to do.

**Reducers:** Reducers are responsible for handling transitions between states. Reducers react to the Actions dispatched and executes a pure function to update the Store.

**Selectors:** Selectors are pure functions for getting slices of the state from the Store. Selectors are how our application can listen to state changes.

**Effects** Effects handle the side effects of each Action. They handle side effects and asynchronous operations such as HTTP requests. They listen for dispatched actions and perform tasks outside the store, such as fetching data
