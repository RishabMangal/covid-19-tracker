import React, { Component } from "react";
import Chart from "./Chart";
class Covidcard extends Component {
  render() {
    var d = new Date(this.props.Date);
    const {
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      } = this.props.data;
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(https://previews.123rf.com/images/lightwise/lightwise1110/lightwise111000251/10909934-world-flags-sphere-floating-and-isolated-as-a-symbol-representing-international-global-cooperation-i.jpg)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat,repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="covid-card row mx-0 container-fluid">
          <h1 className="lead display-4 col-sm-12">
            <img
              src={`https://previews.123rf.com/images/lightwise/lightwise1110/lightwise111000251/10909934-world-flags-sphere-floating-and-isolated-as-a-symbol-representing-international-global-cooperation-i.jpg`}
              alt="flag"
              className="flag-img"
            ></img>Global
          </h1>
          <table className="table data-table col-sm-4">
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
                  <td className="text-primary text-cursive">{d.toDateString()}</td>
                </tr>
              </tbody>
                </table>
                <div className="col-sm-8">
                    <Chart data={this.props.data}></Chart>
                </div>
        </div>
      </div>
    );
  }
}

export default Covidcard;
