import React from "react";
import ApiContext from "../../ApiContext";
import { Link } from "react-router-dom";

export default class HouseholdNavDisplay extends React.Component {
  static contextType = ApiContext;

  render() {
    return (
      <div className="HouseholdNavDisplay">
        <h3 className="HouseholdNavDisplay-household-display">household:</h3>
        <ul className="HousehListNav-List">
          {this.context.household.map(household => (
            <li key={household.id}>{household.title}</li>
          ))}
          <Link to="/AddHousehold">
            <button
              type="button"
              className="AddHousehold"
              onClick={this.AddHousehold}
            >
              Add Household
            </button>
          </Link>
        </ul>
      </div>
    );
  }
}
