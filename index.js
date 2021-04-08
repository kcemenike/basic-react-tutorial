// Create components

/// Parent component (it's actually a JS function)
function Parent() {
  return (
    <div>
      <h1>The Parent</h1>
      <h3>Name: </h3>
    </div>
  )
}

/// Child component (let's use arrow function this time)
const Child = () => {
  return (
    <div>
      <h1>The Child</h1>
      <h3>Name: </h3>
    </div>
  )
}

// Render components to App
class App extends React.Component {
  render() {
    return <div>
      <Parent />
      <Child />
    </div>
  }
}

// Render App to DOM
ReactDOM.render(<App />, document.getElementById('root'))