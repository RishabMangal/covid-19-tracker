import React, { Component } from "react";
import Covidcard from "./Covidcard";
import CountryCard from "./CountryCard";
import Loader from "react-loader-spinner";
class Covid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      data: {},
      loading: true,
    };
    }
    

    async componentDidMount() {
      await fetch("https://api.covid19api.com/summary")
        .then((res) => res.json())
        .then((data) => this.setState({ data, loading: false }))
        .catch((err) => console.log(err));
      console.log(this.state.data);
    }
    render() {
         let temp = {
        Country:"Global",    
        NewConfirmed: 154681,
        NewDeaths: 5292,
        NewRecovered: 85889,
        TotalConfirmed: 7612919,
        TotalDeaths: 429514,
        TotalRecovered: 3540045}
    return (
      <div>
        <form className="row search" onSubmit={this.search}>
          <input
            type="text"
            placeholder="Enter Country Name..."
            onChange={(e) => this.setState({ country: e.target.value })}
            value={this.state.country}
            className="form-control form-control-lg col-sm-8"
            required
          ></input>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary col-sm-2"
          ></input>
        </form>
        {this.state.loading && (
          <div
            className=""
            style={{
              position: "absolute",
              top: "20%",
              left: "40%",
              right: "50%",
              bottom: "50%",
            }}
          >
            <h2 className="display-4 lead text-primary m-4">Loading...</h2>
            <Loader
              type="Oval"
              height={200}
              width={200}
              color="#01a1ff"
            ></Loader>
          </div>
        )}
        {/* {!this.state.loading && (
          <Covidcard
            data={temp}
            Date={this.state.data.Date}
          ></Covidcard>
        )} */}
        {!this.state.loading && (
          <Covidcard
            data={this.state.data.Global}
            Date={this.state.data.Date}
          ></Covidcard>
        )}

        {!this.state.loading && (
          <div className="row mx-0">
            {this.state.data.Countries.map((c, i) => (
              <div className="col-sm-4 p-2 country-card" key={i}>
                <CountryCard data={c}></CountryCard>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Covid;
