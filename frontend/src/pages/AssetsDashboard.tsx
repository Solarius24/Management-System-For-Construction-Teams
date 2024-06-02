import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAppDispatch } from "../redux/reduxHooks";

function AssetsDashboard() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useAppDispatch();

  function handleModalShow() {
    setModalShow(true);
  }

  function handleSaveAssetsList() {}
  return (
    <div className="bg-light">
      <Container fluid style={{ marginTop: "30px" }}>
        <Button variant="primary" className="m-3" onClick={handleModalShow}>
          ADD ASSET
        </Button>
        <Button variant="primary" onClick={handleSaveAssetsList}>
          SAVE
        </Button>
        <Table striped bordered hover>
          <thead>
            <th className="text-center">
              <a href=" ">ASSET NAME</a>
            </th>
            <th className="text-center">
              <a href=" ">ASSET DESCRIPTION</a>
            </th>
            <th className="text-center">
              <a href=" ">NUMBER OF ITEMS</a>
            </th>
            <th className="text-center">
              <a href=" ">ASSET LOCATION</a>
            </th>
          </thead>

          <tbody></tbody>
        </Table>
      </Container>

      {/* <ModalProcessesAddLocation
        docId={process.length > 0 && process[0]._id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"ADD TAB"}
      /> */}
    </div>
  );
}

export default AssetsDashboard;
