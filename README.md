# mafia
- wanted to have a creater understanding of how hoisting and scope works.

## enviroment creation
1. set up index & js file
2. I used wanted to use jquery for readability and `speed` so I added the jsdelivr jquery CDN
```
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js"></script>
```
3. for this project only use `var` not `let` or `const`. (the goal is to solve the problem using a closure function. And how the browser handels `let` and `const` will make the problem solvable without a closure function)

## Problem
1. load 100 `h3` tags into document that appear similar too
```
Accusation 1
Accusation 2
...
Accusation 100
```
- where the i variable is a number starting at 1 and ending at 100


2. create neccessary arrays
- PEOPLE = an array with 5 names
- WEAPONS = an array with 20 weapons (think of something silly if neccessary like dental floss)
- PLACES = and array with 10 locations

3. when an `h3` is clicked an alert displays like so
```
Accusation i: I accuse PEOPLE, in the PLACES with the WEAPON!
```
- this can be acieved using a closure function and is good practice dealing with the lexical scope using only `var` declarations.