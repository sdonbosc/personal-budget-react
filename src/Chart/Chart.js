import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';

const dataSource = {
    labels: [],
    datasets: [
        {
            label: 'Budget',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4',
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
            ],
            hoverBackgroundColor: [],
            data: []
        }
    ]
}
export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:3000/budget.json")
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    dataSource.labels[i] = response.data[i].title
                    dataSource.datasets[0].data[i] = response.data[i].value;
                }
                this.setState({
                    data: dataSource
                });
            })
            .catch(error => {
                console.log("CHECK ERROR", error);
            });
    }
    render() {
        const { data } = this.state;
        if (!data) { return null }

        return (

            <Doughnut
                data={dataSource}
                options={{
                    title: {
                        display: true,
                        text: 'Budget Chart JS',
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        );
    }
}