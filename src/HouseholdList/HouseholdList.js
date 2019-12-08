import React, { Component } from "react";
import ApiContext from "../ApiContext";
import { Link } from "react-router-dom";
import config from "../config";
import './HouseholdList.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import HouseholdsList from '../recipes-helpers'

// import { findRecipe, findHousehold } from '../recipes-helpers';

class HouseholdList extends Component {
  // static defaultProps = {
  //   match: {
  //     params: {}
  //   }
  // };

  static contextType = ApiContext;

  handleDeleteHousehold = household => {
    return fetch(`${config.API_ENDPOINT}/household/${household}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
      })
      .then(() => {
        this.context.deleteHousehold(household);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div className="HouseholdNav">
        <h2 className="HouseholdNav-householdtitle">Households:</h2>
        <div className="add-household-button">
          <Link to="/AddHousehold">
            <button type="submit" className="create-recipe-back-button">
              Add
            </button>
          </Link>
        </div>
        <section className="household-container">
        <ul className="household_title">
          {this.context.household.map(household => (
            <div key={household.id}>
            <Link
              className="household-link"
              to={`/household/${household.id}/RecipeFromHouseholds`}
            >
              <li className="household-titles">{household.title}</li>
              </Link>
              
            </div>
          ))}
        </ul>
        </section>
      </div>
      
    );
  }
}

export default HouseholdList;
{/* <FontAwesomeIcon
icon={faTrash}
className="delete-button"
type="button"
onClick={() => this.handleDeleteHousehold}
></FontAwesomeIcon> */}