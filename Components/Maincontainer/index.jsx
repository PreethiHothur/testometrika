import React from "react";
import { Starfill } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";
function MainContainer() {
  return (
    <div className="row">
      <div
        className="text-start col"
        style={{ margin: "50px", marginLeft: "150px" }}
      >
        <b>Your result :</b>
        <p>Test time : 00:03:44 , average users 00:10:14</p>
        <p>
          <b>Your IQ is 80.</b>This corresponds to abelow average level IQ. In
          this test you have 8 correct
        </p>
        <p>
          <b>answers from 30.</b> This is not a very good result for your age
          11.
        </p>
        <p>
          <b>Bubble Hit</b>
          <br />
          Play Popular Games Online in Your Browser. No Installation Required
        </p>
        <a href="#">https://en.testometrika.com/funny/nationality-test/</a>
        <br />
        <br />
        <p>
          Please note that first four questions of the test were only the
          practice questions and they <br />
          do not count towards the final result.
        </p>
        <br />
        <b>Permanent result link:</b>
        <br />
        <a href="#">https://en.testometrika.com/a/CeUIMiOGnjlROQU35hxGTg/</a>
        <button className="border border-none text-secondary m-3 rounded">
          copy
        </button>
        <br />
        <br />
        Share result:
        <br />
        <div>
          <Icon.Whatsapp className="fs-2 m-1" style={{ color: "green" }} />
          <Icon.Telegram className="fs-2 m-1" style={{ color: "skyblue" }} />

          <Icon.Facebook className="fs-2 m-1" style={{ color: "blue" }} />
          <Icon.Twitter className="fs-2 m-1" style={{ color: "skyblue" }} />
          <Icon.Pinterest className="fs-2 m-1" style={{ color: "red" }} />
        </div>
      </div>
      <div className="col m-5 ">
        <Icon.StarFill className="text-warning m-1" />
        <Icon.StarFill className="text-warning m-1" />

        <Icon.StarFill className="text-warning m-1" />
        <Icon.StarFill className="text-warning m-1" />
        <Icon.StarHalf className="text-warning m-1" />
        <h2>4.3</h2>
      </div>
    </div>
  );
}

export default MainContainer;
