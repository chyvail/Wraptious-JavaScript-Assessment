# Explanation of the Bug

The variable i is declared with var, which is function-scoped, not block-scoped. This means that there is only one i in the entire function scope of the loop. The function will keep on logging index 5 instead of 0 to 4

## Fixing the Bug

**Using let instead of var:** let creates a new block scope for i in each iteration of the loop, ensuring that each setTimeout callback captures the correct value of i.
