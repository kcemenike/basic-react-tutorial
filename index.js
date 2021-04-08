// Create components

/// Parent component (it's actually a JS function)
function Parent(props) {
  const { parent_name, child_name } = props
  return (
    <div>
      <h1>The Parent</h1>
      <h3>Name: {parent_name}</h3>
      <Child child_name={child_name} />
    </div>
  )
}

/// Child component (let's use arrow function this time)
const Child = (props) => {
  const { child_name } = props
  return (
    <div>
      <h1>The Child</h1>
      <h3>Name: {child_name} </h3>
    </div>
  )
}

// Render components to App
class App extends React.Component {
  render() {
    return <div>
      <Parent parent_name='EMENIKE' child_name='Esther' />
      <hr />
      <Child child_name='Enoch' />
    </div>
  }
}

// Render App to DOM
ReactDOM.render(<App />, document.getElementById('root'))