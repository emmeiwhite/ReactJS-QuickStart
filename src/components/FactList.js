import React from "react";
import { Table, Container } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FactList = ({ limit, facts }) => {
  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>Fact</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {facts.slice(0, limit).map(animal_Cat => {
            return (
              <tr key={animal_Cat._id}>
                <td>{animal_Cat.text}</td>
                <td>{animal_Cat.createdAt}</td>
                <td>{animal_Cat.updatedAt}</td>
                <td className="text-center">
                  <Link to={`/EditFact/${animal_Cat._id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
// This FactList component is receving a prop named 'limit', which is expected to contain a numeric value, prop-types library allows us to set the propTypes for other developers to quickly get an idea what the type of the prop is and in this way help him to understand the code fast

FactList.propTypes = {
  limit: PropTypes.number
};

export default FactList;
