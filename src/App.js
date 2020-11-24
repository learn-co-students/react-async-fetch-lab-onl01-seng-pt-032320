// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        peopleInSpace: []
    }
    
    render() {
        return (
            <div>
                {this.state.peopleInSpace}
            </div>
        )
    }
    
    componentDidMount() {
        let url = 'http://api.open-notify.org/astros.json'
        fetch(url) 
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

}