import React from 'react'

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: this.props.onChangeType
      // changeType: this.props.onChangeType
      // findPetsClick: this.props.onFindPetsClick
    }
  }

  handleChange = (event) => {
    // event.preventDefault()
    let formData = {type: event.target.value }
    this.setState(formData)
    this.props.onChangeType(formData)
  }



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => this.handleChange(event)} value={this.state.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
