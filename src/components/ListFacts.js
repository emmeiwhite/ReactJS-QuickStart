import React from "react";
import { Table, Container } from "reactstrap";
import { facts } from "./../data/AnimalFacts";
import PropTypes from "prop-types";

class ListFacts extends React.Component {
  render() {
    return (
      <Container>
        <h1>ANIMAL DETAILS</h1>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Species</th>
              <th>BirthYear</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {facts.slice(0, this.props.limit).map(animal => {
              return (
                <tr key={animal.id}>
                  <td>{animal.name}</td>
                  <td>{animal.species}</td>
                  <td>{animal.birthYear}</td>
                  <td>
                    <img
                      src={animal.photo}
                      alt={animal.name}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}
// This ListFacts component is receving a prop named 'limit', which is expected to contain a numeric value, prop-types library allows us to set the propTypes for other developers to quickly get an idea what the type of the prop is and in this way help him to understand the code fast

ListFacts.propTypes = {
  limit: PropTypes.number
};

export default ListFacts;
