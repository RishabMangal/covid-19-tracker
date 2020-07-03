import React, { Component } from "react";
import Covidcard from "./Covidcard";
import CountryCard from "./CountryCard";
import Loader from "react-loader-spinner";
import Header from "./Header";
import { randomColor } from "randomcolor";
// import pattern from "patternomaly";
import BarChart from "./BarChart";
class Covid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      data: {},
      loading: true,
      index: 76,
      class: "",
      bgColors: [],
      brColors: [],
      hvColors: [],
      hrColors: [],
      TotalConfirmed: [],
      NewConfirmed: [],
      TotalDeaths: [],
      NewDeaths: [],
      TotalRecovered: [],
      NewRecovered: [],
      Countries: [],
    };
  }

  async componentDidMount() {
    await fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ data, loading: false }, () => {
          this.state.data.Countries.forEach((c, i) => {
            this.state.bgColors.push(randomColor());
            this.state.brColors.push(randomColor());
            this.state.NewConfirmed.push(c.NewConfirmed);
            this.state.TotalConfirmed.push(c.TotalConfirmed);
            this.state.NewDeaths.push(c.NewDeaths);
            this.state.TotalDeaths.push(c.TotalDeaths);
            this.state.NewRecovered.push(c.NewRecovered);
            this.state.TotalRecovered.push(c.TotalRecovered);
            this.state.Countries.push(c.Country);
          });
        })
      )
      .catch((err) => console.log(err));
    console.log(this.state.data);
    this.state.bgColors.forEach((c, i) => {
      this.state.hvColors.push(`${c}50`);
    });
    this.state.brColors.forEach((c, i) => {
      this.state.hrColors.push(`${c}50`);
    });
  }

  search = (e) => {
    e.preventDefault();
    let x = this.state.data.Countries.find((c, i) => {
      if (c.Country.toLowerCase() === this.state.country.toLowerCase()) {
        this.setState({ country: "", index: i, class: "is-valid" });
        window.location = "#country-report";
      }
      return c.Country.toLowerCase() === this.state.country.toLowerCase();
    });
    if (!x) this.setState({ class: "is-invalid" });
  };
  render() {
    const {
      Countries,
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      bgColors,
      brColors,
      hvColors,
      hrColors,
    } = this.state;
    const obj = {
      Countries,
      bgColors,
      brColors,
      hvColors,
      hrColors,
    };
    return (
      <div>
        <Header
          Date={this.state.loading ? new Date() : this.state.data.Date}
        ></Header>
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
        {!this.state.loading && (
          <div>
            <div className="row mx-0 strip">
              {this.state.data.Countries.map((c, i) => (
                <div
                  className="m-0"
                  key={i}
                  onClick={() => {
                    this.setState({ index: i });
                    window.location = "#country-report";
                  }}
                >
                  <img
                    src={`https://www.countryflags.io/${c.CountryCode}/shiny/64.png`}
                    alt={`${c.CountryCode}`}
                    className="m-0 flag-strip"
                    title={c.Country}
                  ></img>
                </div>
              ))}
            </div>
            <form className="search" onSubmit={this.search}>
              <div className="form-group row">
                {this.state.class === "is-invalid" ? (
                  <div className="col-sm-12 m-1 text-danger lead text-left">
                    <i className="fas fa-exclamation"></i> No Such Country....!
                  </div>
                ) : null}
                <input
                  type="text"
                  placeholder="Enter Country Name..."
                  onChange={(e) => this.setState({ country: e.target.value })}
                  value={this.state.country}
                  className={`form-control form-control-lg ${this.state.class} col-sm-8`}
                  required
                ></input>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary col-sm-2"
                ></input>
              </div>
            </form>
            <Covidcard
              data={this.state.data.Global}
              Date={this.state.data.Date}
            ></Covidcard>
            <Covidcard
              data={this.state.data.Countries[this.state.index]}
            ></Covidcard>
            <div>
              <BarChart values={NewConfirmed} title={"New Confirmed"} titleColor={"lightblue"} obj={obj}></BarChart>
              <BarChart values={TotalConfirmed} title={"Total Confirmed"} titleColor={"#166cff"} obj={obj}></BarChart>
              <BarChart values={NewDeaths} title={"New Deaths"} obj={obj} titleColor={"crimson"}></BarChart>
              <BarChart values={TotalDeaths} title={"Total Deaths"} obj={obj} titleColor={"red"}></BarChart>
              <BarChart values={NewRecovered} title={"New Recovered"} obj={obj} titleColor={"lightgreen"}></BarChart>
              <BarChart values={TotalRecovered} title={"Total Recovered"} obj={obj} titleColor={"green"}></BarChart>
            </div>
            <div className="row mx-0">
              {this.state.data.Countries.map((c, i) => (
                <div
                  className="col-sm-4 country-card"
                  key={i}
                  onClick={() => {
                    this.setState({ index: i });
                    window.location = "#country-report";
                  }}
                >
                  <CountryCard data={c}></CountryCard>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Covid;
