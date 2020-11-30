import React, { Component } from 'react'

 class App extends Component {

    state = {
        astronauts: []
    }
    render() {
        return (
            <div>
               {this.state.astronauts.map((person, id) => <h1 key={id} id={id}>{person.name}</h1>)} 
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                astronauts: data.people
            })
        })
    }
}

export default App
