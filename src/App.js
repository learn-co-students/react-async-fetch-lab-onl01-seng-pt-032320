import React, { Component } from 'react'
// create your App component here
class App extends React.Component {
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => console.log(json))
        // .catch(error => console.error(error))
    }
  
    render = () => "Shamel Was Here"
  }


export default App