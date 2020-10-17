import React, { Component } from "react";
import axios from "axios";
import PieComponent from "../PieComponent/PieComponent";
import { Pie, Doughnut } from "react-chartjs-2";

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/budget.json")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log("CHECK ERROR", error);
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? (
          <div>
            <PieComponent
              data={data}
              width={500}
              height={300}
              innerRadius={0}
              outerRadius={150}
              margin={{ top: 10, bottom: -200, left: 50, right: 50 }}
            />
            ,
          </div>
        ) : null}
      </div>
    );
  }
}
