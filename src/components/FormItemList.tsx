import React from "react";
import { Container, NavLink, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormItemList = () => {
  let data = [];
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    //@ts-ignore
    let dataTemp = JSON.parse(localStorage.getItem(key));
    console.log(dataTemp);
    data.push({ formRef: key, dataTemp: dataTemp.form });
  }
  console.log(data);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr id="form-grid-row-01">
            <th className="ng-star-inserted">
              <input
                type="checkbox"
                data-columnname="rowSelection"
                id="select-all-form-grid"
                className="ng-untouched ng-pristine ng-valid"
              />
              <label htmlFor="select-all-form-grid">&nbsp;</label>
            </th>

            <th data-columnname="formId" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Ref
              </a>
            </th>
            <th data-columnname="formStatus" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Status
              </a>
            </th>
            <th data-columnname="location" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Location
              </a>
            </th>
            <th data-columnname="formName" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Name
              </a>
            </th>
            <th data-columnname="createdDate" className="ng-star-inserted">
              <span className="icon icon-down ng-star-inserted"></span>
              <a className="ng-star-inserted" href=" ">
                Created
              </a>
            </th>
            <th data-columnname="formType" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Type
              </a>
            </th>
            <th data-columnname="byUser" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                By User
              </a>
            </th>
            <th data-columnname="byOrganisation" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                By Organisation
              </a>
            </th>
            <th data-columnname="statusDate" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Status Changed
              </a>
            </th>
            <th data-columnname="expiryDate" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Expiry Date
              </a>
            </th>
            <th data-columnname="actions" className="ng-star-inserted">
              <a className="ng-star-inserted" href=" ">
                Actions
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
        <>
          
          <tr>
            <td></td>
            <td id="ref"><Link to={`/forms/edit/${item.formRef}`}>{item.formRef}</Link></td>
            <td id="status"></td>
            <td id="location"></td>
            <td id="name">{item.dataTemp[0].title}</td>
            <td id="createdDate"></td>
            <td id="type"></td>
            <td id="createdBy"></td>
            <td id="organizationName"></td>
            <td id="statusChangedDate"></td>
            <td id="expiryDate"></td>
            <td id="action"></td>
          </tr>
          <div></div>
        </>
      ))}
        </tbody>
      </Table>

    </Container>
  );
};

export default FormItemList;
