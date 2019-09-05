// This well hold our FactList Component, a parent for FactList Component !!!
// A container... which deals with the data. Smart Component
import React from "react";
import FactList from "./FactList";
import httpService from "./../services/HttpService";

// LOADER SPINNER
import loaderSpinner from "./../Spinner-1s-200px.svg";

class FactListPage extends React.Component {
  state = {
    facts: [],
    error: false,
    isLoading: true
  };

  componentDidMount() {
    httpService
      .get()
      .then(data => {
        this.setState({
          facts: data,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  }
  render() {
    if (this.state.error) {
      return <div>ERROR LOADING PAGE ...</div>;
    }

    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <img src={loaderSpinner} alt="Loading the page ..." />
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-center">
          Facts About Animals (2/{this.state.facts.length})
        </h1>
        <FactList limit={2} facts={this.state.facts} />
      </div>
    );
  }
}

export default FactListPage;
