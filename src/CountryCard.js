import React, { Component } from "react";
import PieChart from "./PieChart";

class CountryCard extends Component {
  render() {
    let d = new Date(this.props.data.Date);
    const {
      Country,
      CountryCode,
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = this.props.data;
    return (
      <div>
        <div
          className="mx-0 m-1"
          style={{
            // backgroundImage: `url(https://www.worldometers.info/img/flags/${CountryCode.toLowerCase()}-flag.gif)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat,repeat",
            backgroundPosition: "center",
            // backgroundImage:"radial-gradient(white,grey,black)"
          }}
        >
          <div className="covid-card row mx-0">
            <h1 className="lead display-4 col-sm-12">
              <img
                src={`https://www.countryflags.io/${CountryCode}/shiny/64.png`}
                alt="flag"
                className="flag-img"
              ></img>{" "}
              {Country} [{CountryCode}]
            </h1>
            <div className="col-sm-6">
              <table className="table data-table table-hover table-sm  m-1 ">
                <tbody>
                  <tr>
                    <th className="text-info">New Confirmed</th>
                    <td className="text-info">{NewConfirmed}</td>
                  </tr>
                  <tr>
                    <th className="text-danger">New Deaths</th>
                    <td className="text-danger">{NewDeaths}</td>
                  </tr>
                  <tr>
                    <th className="text-success">New Recovered</th>
                    <td className="text-success">{NewRecovered}</td>
                  </tr>
                  <tr>
                    <th className="text-info">Total Confirmed</th>
                    <td className="text-info">{TotalConfirmed}</td>
                  </tr>
                  <tr>
                    <th className="text-danger">Total Deaths</th>
                    <td className="text-danger">{TotalDeaths}</td>
                  </tr>
                  <tr>
                    <th className="text-success">Total Recovered</th>
                    <td className="text-success">{TotalRecovered}</td>
                  </tr>
                  <tr>
                    <th className="text-primary">Date</th>
                    <td className="text-primary">{d.toDateString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-6">
              <PieChart data={this.props.data}></PieChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;
