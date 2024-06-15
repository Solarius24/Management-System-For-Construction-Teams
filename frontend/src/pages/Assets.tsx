import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAppSelector } from "../redux/reduxHooks";
import { Link } from "react-router-dom";

const Assets = () => {
  const [showFilter, setShowFilter] = useState(false);
  const data = useAppSelector((state) => state.assets.data);

  const handleCloseShowFilter = () => {
    if (!showFilter) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  return (
    <Container
      fluid
      className="overflow-auto"
      style={{ height: "80vh", marginTop: "60px" }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">REF</th>
            <th className="text-center">ASSETS LIST NAME</th>
            <th className="text-center">ORGANIZATION</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any) => {
            return (
              <tr>
                <td>
                  <Link to={`/assets/detail/${item._id}`}>{item._id}</Link>
                </td>
                <td>{item.title}</td>
                <td>{item.organizationName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Assets;
