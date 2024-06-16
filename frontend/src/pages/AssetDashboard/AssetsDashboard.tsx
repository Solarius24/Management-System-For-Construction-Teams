import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAppSelector } from "../../redux/reduxHooks";
import { useParams } from "react-router-dom";
import ModalAddAsset from "../../components/modals/ModalAddAsset";

function AssetsDashboard() {
  const [modalShow, setModalShow] = useState(false);
  const data = useAppSelector((state) => state.assets.data);

  let { assetRef } = useParams();
  const assets = data.filter((item) => item._id === assetRef);

  function handleModalShow() {
    setModalShow(true);
  }

  return (
    <div className="bg-light">
      <Container fluid style={{ marginTop: "30px" }}>
        <Button variant="primary" className="m-3" onClick={handleModalShow}>
          ADD ASSET
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">ASSET ID</th>
              <th className="text-center">ASSET NAME</th>
              <th className="text-center">ASSET DESCRIPTION</th>
              <th className="text-center">NIMBER OF ITEMS</th>
              <th className="text-center">ASSET LOCATION</th>
            </tr>
          </thead>

          <tbody>
            {assets.length > 0 &&
              assets[0].listOfItems.map((item) => {
                return (
                  <tr>
                    <td>{item.itemId}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemDescription}</td>
                    <td>{item.itemQuantity}</td>
                    <td>{item.itemLocation}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>

      <ModalAddAsset
        id={assetRef}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AssetsDashboard;
