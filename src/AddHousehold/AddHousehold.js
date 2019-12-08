import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from '../config';
import { Link } from 'react-router-dom'

class AddHousehold extends Component {
  state = {
      title: ''
    }


  static contextType = ApiContext;

  handleAddHousehold = (e) => {
    e.preventDefault();

    const newHousehold = {
      title: this.state.title,
    }
  
    fetch(`${config.API_ENDPOINT}/household`, 
      {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newHousehold)
    
  })
    .then(res => {
      if (!res.ok) 
      return res.json()
      .then(e => Promise.reject(e));
      return res.json();
    })
    .then((household) => {
      this.context.addNewHousehold(household);
      this.props.history.push('/');
    });
  };

  getHousehold = (e) => {
    this.setState({title: e.target.value});
  };
  
  render() {
    return (
    <section className ="add-household">
        <Link to="/">
          <button>Back</button>
        </Link>
        <form onSubmit={e => this.handleAddHousehold(e)}
        >
        <div>
          <h2>New Household </h2>
          <label htmlFor="title" className="add-household-label">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            // value={this.state.title}
            onChange={ this.getHousehold }
          />
          <button type="submit">New Household</button>
        </div>
      </form>
      </section>
    );
  }
}

export default AddHousehold;
