# Learn React in 10 steps

A 10-step guide to learning react with almost basic knowledge of HTML and JS  
_How to follow along_

- Fork this git
- Checkout each step using `git checkout commit`  
  e.g. `git checkout https://github.com/kcemenike/basic-react-tutorial/commit/7cc9b0b5abbf57f0f8ebc40c9ae31e1156909cc7`

## [1. Create HTML and JS files](../../commit/7cc9b0b5abbf57f0f8ebc40c9ae31e1156909cc7)

- Create an index.html file with 'Hello World' :-D
- Create an empty index.js file

## [2. Add React code](../../commit/9f07acf8deffda6ed2a92aa7e82ea0e5c366e8aa)

- Add React script tag to index.html
- Link index.html to index.js using the script tag
- Add React code to index.js using pure JavaScript

## [3. Convert JS to JSX for ease of development (and transpile with Babel)](../../commit/2e830d95f529feb6b8ecb4e7bfad4153cd1874d6)

- Change index.js script tag in index.html to a babel script using type="text/babel'
- Add Babel script tag to index.html
- Convert components to JSX (drop the React.createElement methods)

## [4. Add individual components to App](../../commit/de4c17ec82d52eee38f07288292118520c30e063)

- Create Parent component
- Create Child components
- Add both Parent and Child Components in App

## [5. Add properties to components](../../commit/9dfa330f1a45f76b11ba40699e056fc667fc09b7)

- Add props (in this case, parent_name) to Parent component

## [6. Add properties to components - 2](../../commit/a391ef861cfedaeba2c373a00055d686c0ec2eac)

- Add props (in this case, child_name) to Child component

## [7. Pass component as a child of another component](../../commit/3294b3de2dda871852008f5fa2ca3b8912834603)

- Make Child component a child of Parent component  
  You will notice that the child props show in child component, but not in the parent component. To fix this, we will need to pass child props to parent component (in the next tree)

## [8. Pass child props to parent component](../../commit/963e049c99bf7e8bf6099deb9809d24d00f8d504)

- Add child props (child_name) as props to Parent component

## [9. Pass child props through multiple levels](../../commit/8b90da6e0913d66a5d64d9951c8dc7fe1da30659)

- Create GrandParent component
- pass multiple props through various levels

## [10. Final cleanup](../../commit/cc6fbbed1d33b8ab6e2c4f515803f846f6df68aa)

- Single component with child components
