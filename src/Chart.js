import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class Chart extends Component {
  render() {
    const {
      Country,
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = this.props.data;
    const data = {
      labels: [
        "NewConfirmed",
        "NewDeaths",
        "NewRecovered",
        "TotalConfirmed",
        "TotalDeaths",
        "TotalRecovered",
      ],
      datasets: [
        {
          backgroundColor: [
            "rgba(50,50,200,0.5)",
            "rgba(200,50,50,0.5)",
            "rgba(50,200,50,0.5)",
            "rgba(100,100,255,0.5)",
            "rgba(255,100,100,0.5)",
            "rgba(100,255,100,0.5)",
          ],
          borderColor: [
            "rgba(0,0,200,1)",
            "rgba(200,0,0,1)",
            "rgba(0,200,0,1)",
            "rgba(0,0,255,1)",
            "rgba(255,0,0,1)",
            "rgba(0,255,0,1)",
          ],
          borderWidth: 1,
          hoverBackgroundColor: [
            "rgba(0,0,200,0.3)",
            "rgba(200,0,0,0.3)",
            "rgba(0,200,0,0.3)",
            "rgba(0,0,255,0.3)",
            "rgba(255,0,0,0.3)",
            "rgba(0,255,0,0.3)",
          ],
          hoverBorderColor: [
            "rgba(0,0,200,1)",
            "rgba(200,0,0,1)",
            "rgba(0,200,0,1)",
            "rgba(0,0,255,1)",
            "rgba(255,0,0,1)",
            "rgba(0,255,0,1)",
          ],
          data: [
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
          ],
        },
      ],
    };
    return (
      <div className="bar-chart">
        {/* <Pie></Pie> */}
        <Bar
          data={data}
          width={150}
          height={40}
          options={{
            title: {
              display: true,
              text:  Country ? `${Country}'s Corona Report` :"Global Corona Report",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    offsetGridLines: false,
                  },
                  barPercentage: 0.5,
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    offsetGridLines: false,
                  },
                  barPercentage: 0.4,
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
