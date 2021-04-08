// Component render
class App extends React.Component {
  render() {
    return React.createElement('div', { id: 'name' }, 'My name is KC')
    /**
    'div' => type of element, in this case, div
    { id: 'name' } =>// properties that children will have. Can also be null
    'My name is Kelechi' => the child(ren)
    )
     */
  }
}

// Render App to DOM
ReactDOM.render(React.createElement(App), document.getElementById('root'))