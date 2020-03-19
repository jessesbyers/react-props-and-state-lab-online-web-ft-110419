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
    console.log(data)
    console.log(this.state.filters)
    this.setState({filters: data})
    this.findPetsClick(data.type)
  }

  findPetsClick = (data) => {
    console.log(this.state.filters.type)
    if (data === "all") {
      fetch("/api/pets")
      .then(function(response) {
        return response.json();
       })
       .then(function(json){
          console.log(json)       
      })
       

    } else {
      fetch("/api/pets?type=" + data)
      .then(function(response) {
        return response.json();
       })
       .then(function(json){
        console.log(json)       

          console.log(json[0])       
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
              <Filters onChangeType={this.changeType}/>

            </div>
            <div className="twelve wide column">
              <PetBrowser onFindPetsClick={this.findPetsClick} onAdoptPet={"testing"}/>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
