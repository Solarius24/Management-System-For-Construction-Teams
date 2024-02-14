import { Card, CardBody, CardTitle } from "react-bootstrap";

function FormsRecentActivity() {
  return (
    <Card>
      <CardTitle>FORMS RECENT ACTIVITY</CardTitle>
      <CardBody style={{ display: "flex", flexDirection: "row" }}>
        <div className="chart-container">
          <svg width="100%" height="200">
            <g transform="scale(1)">
              <g transform="translate(68.5, 0)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#569BBE"
                >
                  Average
                </text>
              </g>
              <g transform="translate(30.5, 19)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#569BBE"
                >
                  Raised Weekly
                </text>
              </g>
            </g>
            <g transform="translate(97.5, 124)">
              <path
                className="click-through"
                d="M0,-76A76,76,0,1,1,0,76A76,76,0,1,1,0,-76M0,-71A71,71,0,1,0,0,71A71,71,0,1,0,0,-71Z"
                // style="fill: rgb(86, 155, 190);"
              ></path>
              <g transform="scale(0.9472562540423561)">
                <text
                  className="click-through"
                  font-size="40"
                  font-family="Fira Sans"
                  x="-53"
                  fill="#569BBE"
                  dy=".35em"
                >
                  131.50
                </text>
                <text
                  className="click-through"
                  font-size="12"
                  font-family="Fira Sans"
                  x="-17"
                  y="24"
                  fill="#569BBE"
                  dy=".35em"
                >
                  Forms
                </text>
              </g>
            </g>
          </svg>
        </div>

        <div className="chart-container">
          <svg width="100%" height="200">
            <g transform="scale(1)">
              <g transform="translate(68.5, 0)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#569BBE"
                >
                  Average
                </text>
              </g>
              <g transform="translate(30.5, 19)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#569BBE"
                >
                  Completed Weekly
                </text>
              </g>
            </g>
            <g transform="translate(97.5, 124)">
              <path
                className="click-through"
                d="M0,-76A76,76,0,1,1,0,76A76,76,0,1,1,0,-76M0,-71A71,71,0,1,0,0,71A71,71,0,1,0,0,-71Z"
                // style="fill: rgb(86, 155, 190);"
              ></path>
              <g transform="scale(0.9472562540423561)">
                <text
                  className="click-through"
                  font-size="40"
                  font-family="Fira Sans"
                  x="-53"
                  fill="#569BBE"
                  dy=".35em"
                >
                  131.50
                </text>
                <text
                  className="click-through"
                  font-size="12"
                  font-family="Fira Sans"
                  x="-17"
                  y="24"
                  fill="#569BBE"
                  dy=".35em"
                >
                  Forms
                </text>
              </g>
            </g>
          </svg>
        </div>
        <div className="chart-container">
          <svg width="100%" height="200">
            <g transform="scale(1)">
              <g transform="translate(75, 0)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#769640"
                >
                  Forms
                </text>
              </g>
              <g transform="translate(22, 19)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#769640"
                >
                  Completion Estimate
                </text>
              </g>
            </g>
            <g transform="translate(97.5, 124)">
              <path
                className="click-through"
                d="M0,-76A76,76,0,1,1,0,76A76,76,0,1,1,0,-76M0,-71A71,71,0,1,0,0,71A71,71,0,1,0,0,-71Z"
                // style="fill: rgb(118, 150, 64);"
              ></path>
              <g transform="scale(1.2245019869328018)">
                <text
                  className="click-through"
                  font-size="40"
                  font-family="Fira Sans"
                  x="-41"
                  fill="#769640"
                  dy=".35em"
                >
                  27.79
                </text>
                <text
                  className="click-through"
                  font-size="12"
                  font-family="Fira Sans"
                  x="-17.5"
                  y="24"
                  fill="#769640"
                  dy=".35em"
                >
                  Weeks
                </text>
              </g>
            </g>
          </svg>
        </div>
      </CardBody>
    </Card>
  );
}

export default FormsRecentActivity;
