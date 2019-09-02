import React from "react";
import { Table } from "reactstrap";
import { facts } from "./../data/AnimalFacts";

export default class ListFacts extends React.Component {
  render() {
    return (
      <main>
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
            {facts.map(animal => {
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
      </main>
    );
  }
}
