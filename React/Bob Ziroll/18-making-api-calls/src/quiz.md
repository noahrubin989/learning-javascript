1. What is a "side effect" in React? What are some examples?
   Any code that you want to run that React is not in charge of handling. Examples include:

   - Local storage
   - Interaction with an API
   - Websocket

2. What is NOT a "side effect" in React? Examples?
   Anything that React is in charge of. Examples include:

- Maintaining state
- Keeping ther UI in sync (displaying correctly) with the data

3. When does React run your `useEffect` function and when does it not?
   React will run `useEffect` when the component loads (first render) and assuming that we do not pass a dependencies array to `useEffect`, it will run on every re-render of the component. The `useEffect` function will not be run when the dependencies in the array stay the same between renders

4. Explain what the dependencies array is in `useEffect`
   The dependencies array is the second argument to the `useEffect` function and allows React to determine whether it should re-run the effect or not. It is a way for React to know whether we should run the `useEffect` function.
