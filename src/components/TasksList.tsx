//@ts-ignore
import React from "react";
import { Container, Table } from "react-bootstrap";
import columnConfigList from "../configData/columnConfigList";

const TasksList = () => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                data-columnname="rowSelection"
                id="select-all-task-grid"
                className="ng-untouched ng-pristine ng-valid"
              />
            </th>
            {columnConfigList.map((item) => {
              return (
                <th key={item.id}>
                  <a href=" ">{item.name}</a>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          <tr id="task-grid-row-0" className="ng-star-inserted">
            <td className="ng-star-inserted">
              <input
                type="checkbox"
                id="task-grid-row-0-input"
                className="ng-untouched ng-pristine ng-valid"
              />
              <label htmlFor="task-grid-row-0-input">&nbsp;</label>
            </td>

            <td id="Location" className="ng-star-inserted">
              <span className="ng-star-inserted">
                OOC-EXP-EB-B1-5563-WAL-011 &gt; Vertical Element &gt; B1 -
                Intermediate Level &gt; WP8-KD7 - East Box (GL 47-63.5) &gt;
                Structural
              </span>
            </td>
            <td id="Description" className="ng-star-inserted">
              <span className="ng-star-inserted">
                Filling the blowholes in the upstand wall in intermediate level
              </span>
            </td>
            <td id="Created" className="ng-star-inserted">
              <span className="ng-star-inserted">Wed Nov 15 2023</span>
            </td>
            <td id="Target" className="ng-star-inserted">
              <span className="ng-star-inserted">Wed Nov 22 2023</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TasksList;
