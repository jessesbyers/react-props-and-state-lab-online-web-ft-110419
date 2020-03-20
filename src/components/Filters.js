import React from 'react'

class Filters extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      type: this.props.onChangeType,
      // changeType: this.props.onChangeType
      // findPetsClick: this.props.onFindPetsClick
    }
  }

  handleChange = (event) => {
    // event.preventDefault()
    let formData = {type: event.target.value }
    this.setState(formData)
    // this.props.onChangeType(formData)
    this.props.onChangeType()

    // this.props.onFindPetsClick(formData)
  }

  // handleClick = (event) => {
  //   console.log(event.target)
  //   this.props.onFindPetsClick(event.target.value)
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={this.handleChange} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick} value={this.state.type}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters

