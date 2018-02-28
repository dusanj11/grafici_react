import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Bar } from 'react-chartjs-2';

const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
});


class App extends React.Component {
    constructor() {
        super();
        this.state = getState();
    }

    onGreet() {
        alert("Helo");
    }

    render() {

        return (

            <div className="container">
                <p> helooo </p>
                <Bar
                    data={data1}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
                <Doughnut data={this.state} />
            </div>
        );
    }
}

ReactDOM.render(<App />, window.document.getElementById("app"));