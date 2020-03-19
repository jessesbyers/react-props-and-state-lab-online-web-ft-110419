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
      console.log(fetch("/api/pets"))
      .then (response => response.json)
      .then (json => console.log(json))

    } else {
      fetch("/api/pets?type=" + data)
      .then (response => response.json)
      .then (json => console.log(json))
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
