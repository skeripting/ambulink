import React from "react";
import "./GradientBackground.scss";

function LayeredCircles(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="726"
      height="717"
      viewBox="0 0 726 717"
    >
      <defs>
        <filter
          id="Ellipse_3"
          x="82"
          y="114"
          width="539"
          height="538"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12.5" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_4"
          x="80"
          y="0"
          width="646"
          height="646"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12.5" result="blur-2" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_2"
          x="0"
          y="179"
          width="538"
          height="538"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12.5" result="blur-3" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_1"
          x="118"
          y="285"
          width="303"
          height="303"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12.5" result="blur-4" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur-4" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Group_15" data-name="Group 15" transform="translate(205.5 -400.5)">
        <g
          transform="matrix(1, 0, 0, 1, -205.5, 400.5)"
          filter="url(#Ellipse_3)"
        >
          <ellipse
            id="Ellipse_3-2"
            data-name="Ellipse 3"
            cx="232"
            cy="231.5"
            rx="232"
            ry="231.5"
            transform="translate(119.5 151.5)"
            fill={
              props.color === "blue"
                ? "rgba(60,165,246,0.81)"
                : "rgba(255,96,108,0.81)"
            }
            opacity="0.57"
          />
        </g>
        <g id="Group_14" data-name="Group 14" transform="translate(-168 438)">
          <g
            transform="matrix(1, 0, 0, 1, -37.5, -37.5)"
            filter="url(#Ellipse_4)"
          >
            <circle
              id="Ellipse_4-2"
              data-name="Ellipse 4"
              cx="285.5"
              cy="285.5"
              r="285.5"
              transform="translate(117.5 37.5)"
              fill={
                props.color === "blue"
                  ? "rgba(60,165,246,0.81)"
                  : "rgba(255,96,108,0.81)"
              }
              opacity="0.42"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -37.5, -37.5)"
            filter="url(#Ellipse_2)"
          >
            <circle
              id="Ellipse_2-2"
              data-name="Ellipse 2"
              cx="231.5"
              cy="231.5"
              r="231.5"
              transform="translate(37.5 216.5)"
              fill={
                props.color === "blue"
                  ? "rgba(60,165,246,0.81)"
                  : "rgba(255,96,108,0.81)"
              }
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -37.5, -37.5)"
            filter="url(#Ellipse_1)"
          >
            <circle
              id="Ellipse_1-2"
              data-name="Ellipse 1"
              cx="114"
              cy="114"
              r="114"
              transform="translate(155.5 322.5)"
              fill={
                props.color === "blue"
                  ? "rgba(60,165,246,0.81)"
                  : "rgba(255,96,108,0.81)"
              }
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
function GradientBackground(props) {
  return (
    <div
      className={
        "gradient-background " +
        (props.color ? "gradient-background-" + props.color : "")
      }
    >
      <div className="bottom-left-layered-circles">
        <LayeredCircles color={props.color}></LayeredCircles>
      </div>
      <div className="top-right-layered-circles">
        <LayeredCircles color={props.color}></LayeredCircles>
      </div>
      <div className="flex-center">{props.children}</div>
    </div>
  );
}

export default GradientBackground;
