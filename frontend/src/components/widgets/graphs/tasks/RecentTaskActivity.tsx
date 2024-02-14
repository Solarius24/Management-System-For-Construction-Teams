import { Card, CardBody, CardTitle } from "react-bootstrap";

function RecentTaskActivity() {
  return (
    <Card>
      <CardTitle>Recent Task Activity</CardTitle>
      <CardBody style={{ display: "flex", flexDirection: "row" }}>
        <div className="chart-container">
          <svg width="100%" height="200">
            <g transform="scale(1)">
              <g transform="translate(16.5, 0)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#569BBE"
                >
                  Average Raised Weekly
                </text>
              </g>
            </g>
            <g transform="translate(99.5, 114.5)">
              <path
                className="click-through"
                d="M0,-85.5A85.5,85.5,0,1,1,0,85.5A85.5,85.5,0,1,1,0,-85.5M0,-80.5A80.5,80.5,0,1,0,0,80.5A80.5,80.5,0,1,0,0,-80.5Z"
                style={{ fill: "rgb(86, 155, 190)" }}
              ></path>
              <g transform="scale(1.3085539284026912)">
                <text
                  className="click-through"
                  font-size="40"
                  font-family="Fira Sans"
                  x="-43.5"
                  fill="#569BBE"
                  dy=".35em"
                >
                  12.25
                </text>
                <text
                  className="click-through"
                  font-size="12"
                  font-family="Fira Sans"
                  x="-15.5"
                  y="24"
                  fill="#569BBE"
                  dy=".35em"
                >
                  Tasks
                </text>
              </g>
            </g>
          </svg>
        </div>
        <div className="chart-container">
          <svg width="100%" height="200">
            <g transform="scale(1)">
              <g transform="translate(1.5, 0)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#569BBE"
                >
                  Average Completed Weekly
                </text>
              </g>
            </g>
            <g transform="translate(99.5, 114.5)">
              <path
                className="click-through"
                d="M0,-85.5A85.5,85.5,0,1,1,0,85.5A85.5,85.5,0,1,1,0,-85.5M0,-80.5A80.5,80.5,0,1,0,0,80.5A80.5,80.5,0,1,0,0,-80.5Z"
                style={{ fill: "rgb(86, 155, 190)" }}
              ></path>
              <g transform="scale(1.211108423096108)">
                <text
                  className="click-through"
                  font-size="40"
                  font-family="Fira Sans"
                  x="-47"
                  fill="#569BBE"
                  dy=".35em"
                >
                  18.00
                </text>
                <text
                  className="click-through"
                  font-size="12"
                  font-family="Fira Sans"
                  x="-15.5"
                  y="24"
                  fill="#569BBE"
                  dy=".35em"
                >
                  Tasks
                </text>
              </g>
            </g>
          </svg>
        </div>
        <div className="chart-container">
          <svg width="100%" height="200">
            <g transform="scale(1)">
              <g transform="translate(5.5, 0)">
                <text
                  font-size="16"
                  font-family="Fira Sans"
                  dy="1em"
                  fill="#769640"
                >
                  Task Completion Estimate
                </text>
              </g>
            </g>
            <g transform="translate(99.5, 114.5)">
              <path
                className="click-through"
                d="M0,-85.5A85.5,85.5,0,1,1,0,85.5A85.5,85.5,0,1,1,0,-85.5M0,-80.5A80.5,80.5,0,1,0,0,80.5A80.5,80.5,0,1,0,0,-80.5Z"
                style={{ fill: "rgb(118, 150, 64)" }}
              ></path>
              <g transform="scale(1.2374368670764582)">
                <text
                  className="click-through"
                  font-size="40"
                  font-family="Fira Sans"
                  x="-46"
                  fill="#769640"
                  dy=".35em"
                >
                  22.89
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

export default RecentTaskActivity;
