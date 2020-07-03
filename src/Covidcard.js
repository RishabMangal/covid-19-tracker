import React, { Component } from "react";
import Chart from "./Chart";
import globe from './globe.png';
class Covidcard extends Component {
  render() {
    var d = this.props.Date
      ? new Date(this.props.Date)
      : new Date(this.props.data.Date);
    const {
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = this.props.data;
    return (
      <div className="covid-card" id="country-report">
        <div className="mx-0 row">
          {this.props.data.Country ? (
            <h1 className="lead display-4 col-sm-12">
              <img
                src={`https://www.countryflags.io/${this.props.data.CountryCode}/shiny/64.png`}
                alt="flag"
                className="flag-img"
              ></img>{" "}
              {this.props.data.Country} [{this.props.data.CountryCode}]
            </h1>
          ) : (
            <h1 className="lead display-4 col-sm-12">
              <img
                src={globe}
                alt="flag"
                className="flag-img mt-2"
              ></img>
              Global
            </h1>
          )}

          <div className="col-sm-4">
            <table className="table data-table">
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
                  <th className="text-warning">Date</th>
                  <td className="text-warning text-cursive">
                    {d.toDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-8">
            <Chart data={this.props.data}></Chart>
          </div>
        </div>
      </div>
    );
  }
}

export default Covidcard;
