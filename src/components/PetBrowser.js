import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPet = (pet) => {
    return (
    <div className="ui cards">
      <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>
    </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.pets.map(pet => this.createPet(pet))}
      </div>
      )
    }
  
}

export default PetBrowser
