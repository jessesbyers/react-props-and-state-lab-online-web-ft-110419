import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (data) => {
    this.setState({filters: data})
  }

  findPetsClick = (data) => {
    console.log(data)

    if (data !== "all") {
      fetch("/api/pets?type=" + data)
      .then(function(response) {
        return response.json();
       })
       .then(function(json){
          console.log(json)       
      })
       
    } else {
      fetch("/api/pets")
      .then(function(response) {
        return response.json();
       })
       .then(function(json){
        console.log(json)       
      })
    }
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid"> 
            <div className="four wide column">
              <Filters filters={this.changeType} onFindPetsClick={this.findPetsClick}/>

            </div>
            <div className="twelve wide column">
              <PetBrowser  onAdoptPet={"testing"}/>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
