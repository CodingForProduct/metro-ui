import React from 'react'

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'ie. 74 Sunset St.'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='pa4 black-80 pa2 mid-gray'>
      <div className="db dtc-ns v-mid-ns tl mb5">
        <label for="home address" className='f5-m pv2 ph2'>
        <p1> Where do you live? </p1>
          <input type="text" className='f5 br2 pv2 ph2 bg-light-gray ' value={this.state.value} onChange={this.handleChange}/>
        </label>
        </div>
      </form>
    );
  }
}
