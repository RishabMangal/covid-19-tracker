import React, { Component } from "react";
import corona from "./corona.png";
class Header extends Component {
  render(props) {
      var d = new Date(this.props.Date);
    return (
      <div className="text-center m-0 container-fluid mx-0 heading">
        <h1 className="">
          <img className="corona" src={corona} alt="COrona Virus"></img>Covid-19
          Tracker
        </h1>
        <p className="text-light">{d.toDateString()}</p>
      </div>
    );
  }
}

export default Header;
