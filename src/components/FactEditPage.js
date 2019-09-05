import React from "react";
// import { withRouter } from "react-router";

class FactEditPage extends React.Component {
  factId = this.props.match.params.factId;
  render() {
    return (
      <div className="text-center">
        <h1>Edit Fact Page :) </h1>
        <p>Fact Id:{this.factId}</p>
      </div>
    );
  }
}

// export default withRouter(FactEditPage);
export default FactEditPage;
