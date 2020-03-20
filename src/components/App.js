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
    console.log(data.target.value)
    this.setState({filters: {
      type: data.target.value
    }})
  }

  findPetsClick = () => {
    console.log(this.state.filters.type)
    if (!this.state.filters.type || this.state.filters.type !== "all") {
      fetch("/api/pets?type=" + this.state.filters.type, this)
      .then(function(response) {
        return response.json();
       })
      .then(json => {
        this.setState({pets: json})
        console.log(this.state)
      })
       
    } else {
      fetch("/api/pets", this)
      .then(function(response) {
        return response.json();
       })
      .then(json => {
        this.setState({pets: json})
        console.log(this.state)
      })
    }
  }

  adoptPet = (id) => {
    console.log(id)
    // this.setState({ pets: {
    //   id:
    // } })
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick}/>

            </div>
            <div className="twelve wide column">
              <PetBrowser  onAdoptPet={this.adoptPet} pets={this.state.pets/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
