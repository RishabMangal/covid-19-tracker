import React, { Component } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Countries: [],
      value: [],
      bgColors: [],
      brColors: [],
      hvColors: [],
      hrColors: [],
      title: "Loading",
      titleColor: "lightblue",
    };
  }

  componentDidMount() {
    let { values, title, titleColor } = this.props;
    const {
      Countries,
      bgColors,
      brColors,
      hvColors,
      hrColors,
    } = this.props.obj;

    this.setState(
      {
        values,
        title,
        titleColor,
        Countries,
        bgColors,
        brColors,
        hvColors,
        hrColors,
      },
      () => {
        // this.state.values.sort((a, b) => (a > b ? 1 : -1));
        console.log("I am Callsd graph");
      }
    );
    // console.log("valuesTemp", values);
    // console.log("title",title);
    // console.log("Countries:",Countries);
    // console.log("bgColors:",bgColors);
    // console.log("brColors:",brColors);
    // console.log("hvColors:",hvColors);
    // console.log("hrColors:",hrColors);
  }
  // componentDidUpdate(prevProps) {
  //     if (prevProps.title !== this.props.title) {
  //         console.log("I am Updated")
  //     }
  //     console.log("I ma Called")
  //   }
  render() {
    const {
      values,
      title,
      Countries,
      bgColors,
      brColors,
      hvColors,
      hrColors,
      titleColor,
    } = this.state;
    const data = {
      labels: Countries,
      datasets: [
        {
          barPercentage: 1,
          barThickness: 10,
          maxBarThickness: 8,
          minBarLength: 4,
          backgroundColor: bgColors,
          borderColor: brColors,
          borderWidth: 1,
          hoverBackgroundColor: hvColors,
          hoverBorderColor: hrColors,
          data: values,
        },
      ],
    };
    const titleText = title;
    const options = {
      title: {
        display: true,
        text: titleText,
        fontSize: 20,
        fontColor: titleColor,
      },
      legend: {
        display: false,
        position: "right",
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: true,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              offsetGridLines: true,
            },
            barPercentage: "0.5%",
          },
        ],
        barPercentage: "0.5%",
      },
    };
    const NoLabeloptions = {
      title: {
        display: true,
        text: titleText,
        fontColor: titleColor,
        fontSize: 20,
      },
      label: "test",
      labels: { display: false },
      legend: {
        display: false,
        position: "right",
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 50,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
            display: false,
          },
        ],
        yAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
            display: false,
          },
        ],
      },
    };
    return (
      <div className="p-2 bg-dark" style={{border:`2px groove ${titleColor}`}}>
        <div
          style={{
            backgroundColor: "#111111",
                }}
                className="glow"
        >
          <Bar width={100} height={23} data={data} options={options}></Bar>
        </div>
        <div className="row mx-0">
          <div
            className="col-sm-6 p-4 glow-blue"
            style={{
              backgroundColor: "#00000095",
                    }}
                    
          >
            <Pie
              width={10}
              height={5}
              data={data}
              options={NoLabeloptions}
            ></Pie>
          </div>
          <div
            className="col-sm-6 p-4 glow-blue"
            style={{
              backgroundColor: "#00000090",
            }}
          >
            <Doughnut
              width={10}
              height={5}
              data={data}
              options={NoLabeloptions}
            ></Doughnut>
          </div>
        </div>
        {/* <div
          style={{
            backgroundColor: "#11111195",
          }}
        >
          <Line width={100} height={20} data={data} options={options}></Line>
        </div> */}
      </div>
    );
  }
}

export default BarChart;
