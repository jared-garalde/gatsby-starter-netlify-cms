import React from "react";
import { Link } from "gatsby";
import { isConstructorDeclaration } from "typescript";
import redCircle from "https://api.podcache.net/embedded-show-player/sh/c8be3a8d-7d98-426d-a7e3-3a89d01e133c?bgColor=%23FFFFFF";

const Player = class extends React.Component {
  render() {
    return (
      <div>
        <div
          class="redcirclePlayer-c8be3a8d-7d98-426d-a7e3-3a89d01e133c"
          style="height: auto;"
        >
          {" "}
          <p style="margin-top:3px;margin-left:11px;font-family: sans-serif;font-size: 10px; color: gray;">
            Powered by{" "}
            <a
              class="redcircle-link"
              href="https://redcircle.com?utm_source=rc_embedded_player&utm_medium=web&utm_campaign=embedded_v1"
            >
              RedCircle
            </a>
          </p>
        </div>
      </div>
    );
  }
};
export default Player;
