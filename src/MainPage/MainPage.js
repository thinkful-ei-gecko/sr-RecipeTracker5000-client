import React from "react";
import HouseholdList from '../HouseholdList/HouseholdList'
import Header from "../Header/Header";
import ApiContext from "../ApiContext";

export default class MainPage extends React.Component {
  static contextType = ApiContext;

  render() {
    return (
      <>
        <Header />
        <HouseholdList />
      </>
    );
  }
}
