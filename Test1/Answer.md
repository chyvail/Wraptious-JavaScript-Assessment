# Event Delegation and why its important in Development

Event delegation is a design pattern in which a single event listener is attached to a common ancestor, rather than attaching listeners to multiple individual elements. This is particularly useful when dealing with a large number of elements or dynamically added elements.

## Why Event Delegation is Useful

**1. Performance:** Instead of attaching event listeners to each child element, a single event listener on the parent element can handle events for all child elements, reducing memory consumption and improving performance.

**2. Simplified Code:** Managing a single event listener is simpler than managing many, making the code cleaner and easier to maintain.
