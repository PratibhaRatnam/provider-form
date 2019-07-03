import React, { Component } from 'react';
import './ProviderForm.css'

class ProviderForm extends Component {
  state = {
    fName: '',
    lName: '',
    NPI: '',
    Telephone: '',
    Email: '',
  }

  handleChange = (event) => {
    var name = event.target.name

    this.setState({[name]: event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
  }
  render() {
    return  <form className="form"  onSubmit={this.handleSubmit}>
             <label className='label'>
                First Name:
                <textarea name='fName' value={this.state.fName} onChange={this.handleChange} />
             </label>
             <br />
             <label className="label">
              Last Name:
              <textarea name='lName' value={this.state.lName} onChange={this.handleChange} />
            </label>
            <label className="label">
             NPI number:
             <textarea name='NPI' value={this.state.NPI} onChange={this.handleChange} />
           </label>
           <label className="label">
            Telephone number:
            <textarea name='Telephone' value={this.state.Telephone} onChange={this.handleChange} />
          </label>
          <label className="label">
           Email address:
           <textarea name='Email' value={this.state.Email} onChange={this.handleChange} />
         </label>
        <input className='button' type="submit" value="Submit" />
      </form>
  }
}

export default ProviderForm;
