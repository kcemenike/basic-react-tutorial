// Component render
class App extends React.Component {
  render() {
    return <div id='name'>My name is KC</div>
    // return React.createElement('div', { id: 'name' }, 'My name is KC')
  }
}

// Render App to DOM
ReactDOM.render(<App />, document.getElementById('root'))