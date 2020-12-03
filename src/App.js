// create your App component here
import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(json => {
                console.log(json.people)
                this.setState({
                     peopleInSpace: json.people
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)} 
                {/* {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)} */}
            </div>
        )
    }
}

export default App
