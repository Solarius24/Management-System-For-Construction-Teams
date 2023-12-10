import React, { useState } from "react";
import { Card, Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import Fillters from "../components/Fillters";
import assetsFilter from "../configData/assetsConfig/assetsFilter";
import ColumnConfig from "../components/ColumnConfig";
import assetsColumnConfigList from "../configData/assetsConfig/assetsColumnConfigList";
import assetsActionList from "../configData/assetsConfig/assetsActionList";
import AssetsList from "../components/AssetsList";

const Assets = () => {
  const [modalAddShow, setModalAddShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showColumnConfig, setShowColumnConfig] = useState(false);
  const handleCloseShowFilter = () => {
    if (!showFilter) {
      setShowColumnConfig(false);
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  const handleCloseShowColumnConfig = () => {
    if (!showColumnConfig) {
      setShowFilter(false);
      setShowColumnConfig(true);
    } else {
      setShowColumnConfig(false);
    }
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        {showFilter && (
          <Col className="col-3">
            <Fillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
              filterData={assetsFilter}
            />
          </Col>
        )}

        {showColumnConfig && (
          <Col className="col-3">
            <ColumnConfig
              handleClose={handleCloseShowColumnConfig}
              show={showColumnConfig}
              onHide={() => setShowColumnConfig(false)}
              columnConfigList={assetsColumnConfigList}
            />
          </Col>
        )}

        <Col>
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={handleCloseShowFilter} eventKey="link-1">
                FILTERS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleCloseShowColumnConfig} eventKey="link-2">
                ADD/REMOVE COLUMN
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="ACTIONS" id="basic-nav-dropdown">
              {assetsActionList.map((item) => {
                return (
                  <>
                    <NavDropdown.Item href={item.id}>
                      {item.name}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </>
                );
              })}
            </NavDropdown>
          </Nav>
        </Col>
      </Row>
      <Card>
      <AssetsList />
      </Card>
    </Container>
  );
};

export default Assets;
