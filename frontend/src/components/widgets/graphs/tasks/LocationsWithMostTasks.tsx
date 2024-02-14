import { Card, CardBody, CardTitle } from "react-bootstrap";

function LocationsWithMostTasks() {
  return (
    <Card>
      <CardTitle>Locations With Most Tasks</CardTitle>
      <CardBody>
        <div className="chart-container">
          <svg width="100%" height="200">
            <g
              className="y-axis"
              transform="translate(125, 0)"
              fill="none"
              font-size="10"
              font-family="sans-serif"
              text-anchor="end"
              //   style='font-size: 12px; font-family: "Fira Sans";'
            >
              <path
                className="domain"
                stroke="currentColor"
                d="M-6,6.5H0.5V200.5H-6"
              ></path>
              <g
                className="tick"
                opacity="1"
                transform="translate(0,24.5)"
                data-title="GF-GL 23-26 > GF - Ground Floor > Central Box > Snagging"
              >
                <line stroke="currentColor" x2="-6"></line>
                <text fill="currentColor" x="-9" dy="0.32em">
                  GF-GL 23-26 &gt; GF - G...
                </text>
              </g>
              <g
                className="tick"
                opacity="1"
                transform="translate(0,63.5)"
                data-title="GF-GL 26-29 > GF - Ground Floor > Central Box > Snagging"
              >
                <line stroke="currentColor" x2="-6"></line>
                <text fill="currentColor" x="-9" dy="0.32em">
                  GF-GL 26-29 &gt; GF - G...
                </text>
              </g>
              <g
                className="tick"
                opacity="1"
                transform="translate(0,102.5)"
                data-title="GF-GL 29-32 > GF - Ground Floor > Central Box > Snagging"
              >
                <line stroke="currentColor" x2="-6"></line>
                <text fill="currentColor" x="-9" dy="0.32em">
                  GF-GL 29-32 &gt; GF - G...
                </text>
              </g>
              <g
                className="tick"
                opacity="1"
                transform="translate(0,141.5)"
                data-title="GF-GL 15-18 > GF - Ground Floor > Central Box > Snagging"
              >
                <line stroke="currentColor" x2="-6"></line>
                <text fill="currentColor" x="-9" dy="0.32em">
                  GF-GL 15-18 &gt; GF - G...
                </text>
              </g>
              <g
                className="tick"
                opacity="1"
                transform="translate(0,180.5)"
                data-title="GF-GL 18-21 > GF - Ground Floor > Central Box > Snagging"
              >
                <line stroke="currentColor" x2="-6"></line>
                <text fill="currentColor" x="-9" dy="0.32em">
                  GF-GL 18-21 &gt; GF - G...
                </text>
              </g>
            </g>
            <g
              className="popup"
              key="GF-GL 23-26 > GF - Ground Floor > Central Box > Snagging"
              transform="translate(126, 6)"
            >
              <rect fill="#569BBE" x="0" y="0" height="37" width="487"></rect>
              <text
                font-size="12"
                font-family="Fira Sans"
                x="492"
                y="18.5"
                dy=".35em"
              >
                88
              </text>
            </g>
            <g
              className="popup"
              key="GF-GL 26-29 > GF - Ground Floor > Central Box > Snagging"
              transform="translate(126, 45)"
            >
              <rect fill="#569BBE" x="0" y="0" height="37" width="387"></rect>
              <text
                font-size="12"
                font-family="Fira Sans"
                x="392"
                y="18.5"
                dy=".35em"
              >
                70
              </text>
            </g>
            <g
              className="popup"
              key="GF-GL 29-32 > GF - Ground Floor > Central Box > Snagging"
              transform="translate(126, 84)"
            >
              <rect fill="#569BBE" x="0" y="0" height="37" width="238"></rect>
              <text
                font-size="12"
                font-family="Fira Sans"
                x="243"
                y="18.5"
                dy=".35em"
              >
                43
              </text>
            </g>
            <g
              className="popup"
              key="GF-GL 15-18 > GF - Ground Floor > Central Box > Snagging"
              transform="translate(126, 123)"
            >
              <rect fill="#569BBE" x="0" y="0" height="37" width="210"></rect>
              <text
                font-size="12"
                font-family="Fira Sans"
                x="215"
                y="18.5"
                dy=".35em"
              >
                38
              </text>
            </g>
            <g
              className="popup"
              key="GF-GL 18-21 > GF - Ground Floor > Central Box > Snagging"
              transform="translate(126, 162)"
            >
              <rect fill="#569BBE" x="0" y="0" height="37" width="105"></rect>
              <text
                font-size="12"
                font-family="Fira Sans"
                x="110"
                y="18.5"
                dy=".35em"
              >
                19
              </text>
            </g>
          </svg>
        </div>
      </CardBody>
    </Card>
  );
}

export default LocationsWithMostTasks;
