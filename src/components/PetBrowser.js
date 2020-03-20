import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPet = (pet) => {
    <div className="ui cards">
      <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>
    </div>
  }

  render() {
    return this.props.pets.forEach(pet => {
      this.createPet(pet)
      
      // <div className="ui cards">
      //   <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>
      // </div>
    })
  }
}

export default PetBrowser
