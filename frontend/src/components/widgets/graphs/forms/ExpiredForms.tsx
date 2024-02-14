import { Card, CardBody, CardTitle } from "react-bootstrap";

function ExpiredForms() {
  return (
    <Card>
      <CardTitle>Expired Forms</CardTitle>
      <CardBody>
        <div className="chart-container">
          <svg width="100%" height="200">
            <g transform="scale(1)">
              <g transform="translate(318.5, 0)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#569BBE"
                ></text>
              </g>
            </g>
            <g transform="translate(318.5, 105)">
              <path
                className="click-through"
                d="M0,-95A95,95,0,1,1,0,95A95,95,0,1,1,0,-95M0,-90A90,90,0,1,0,0,90A90,90,0,1,0,0,-90Z"
                // style="fill: rgb(86, 155, 190);"
              ></path>
              <g transform="scale(1.5713484026367723)">
                <text
                  className="click-through"
                  font-size="40"
                  font-family="Fira Sans"
                  x="-40.5"
                  fill="#569BBE"
                  dy=".35em"
                >
                  9901
                </text>
                <text
                  className="click-through"
                  font-size="12"
                  font-family="Fira Sans"
                  x="0"
                  y="24"
                  fill="#569BBE"
                  dy=".35em"
                ></text>
              </g>
            </g>
          </svg>
        </div>
      </CardBody>
    </Card>
  );
}

export default ExpiredForms;
