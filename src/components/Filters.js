import React from 'react'

class Filters extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      type: this.props.onChangeType
    }
  }

  // handleChange = (event) => {
  //   let formData = {type: event.target.value }
  //   this.setState(formData)
  //   // this.props.onChangeType()
  //   this.props.onChangeType(formData)
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          {/* <select name="type" id="type" value={this.state.type} onChange={this.handleChange} > */}
          <select name="type" id="type" value={this.state.type} onChange={this.props.onChangeType} >

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

