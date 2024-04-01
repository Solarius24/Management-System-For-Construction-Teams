import { useState } from "react";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import AssetsList from "../components/assets/AssetsList";
import AssetsFillters from "../components/assets/AssetsFilters";

const Assets = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseShowFilter = () => {
    if (!showFilter) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  return (
    <Container fluid style={{ marginTop: "60px" }}>
      <Row>
        <Col>
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={handleCloseShowFilter} eventKey="link-1">
                FILTERS
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="ACTIONS" id="basic-nav-dropdown">
              <NavDropdown.Item>CHANGE STATUS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>EXPORT TO CSV</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Col>
      </Row>
      <Row>
        {showFilter && (
          <Col className="col-3">
            <AssetsFillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
            />
          </Col>
        )}
        <Col>
          <AssetsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Assets;
