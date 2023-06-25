1. How would you describe the concept of "state"?

- State allows React components to store and manage data that can change over time.
- It is similar to declaring variables within a component but provides additional features like automatic re-rendering when the state changes.

2. When would you want to use props instead of state?

- Props are used when you want to pass data from a parent component to a child component.
- This allows the child component to receive and use the data, but the child component doesn't have control over modifying the props.
- Props are typically used for data that doesn't change within the component itself.

3. When would you want to use state instead of props?

- State is used when you want a component to manage and maintain its own data that can change over time.
- Unlike props, which are passed from a parent component, state is managed internally within the component and can be updated using setState or similar methods.
- State is used for data that is expected to change and is specific to the component itself.

4. What does "immutable" mean? Are props immutable? Is state immutable?

- "Immutable" means unchanging or unable to be modified. In React, it is recommended to treat props as immutable, meaning that the component should not modify the incoming props directly.
- Instead, components should rely on props for displaying data without making changes to them.
- On the other hand, state is mutable, meaning it can be updated using setState or similar methods provided by React.
