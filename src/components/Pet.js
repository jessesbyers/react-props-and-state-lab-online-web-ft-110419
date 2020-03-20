import React from 'react'

class Pet extends React.Component {

  renderGender = () => {
    if (this.props.pet.gender === "male") {
      return '♂'
    } else {
      return '♀'
    } 
  }

  renderButton = () => {
    if (this.props.pet.isAdopted === true) {
      return (<button className="ui disabled button">Already adopted</button>)
    } else {
      return (<button 
        className="ui primary button" 
        onClick={e => this.props.onAdoptPet(this.props.pet.id)}
        >Adopt pet</button>)
    }
  }

  
  
  
  render() {
    console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
