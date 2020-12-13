// create your App component here
import React, { PureComponent } from 'react';

class App extends PureComponent {

    state = {
        list: []
    }
componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => {
        this.setState({
            list: data.people 
        })
    })
}
render() {
    return (
        <div>
            {this.state.list.map(person => person.name)}
        </div>
    )
  }
}
export default App 