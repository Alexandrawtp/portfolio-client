import React from "react";
import { Doughnut } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";

const data = {
  labels: ["Javascript", "React", "MongoDB", "Node",  "Python", "Material UI"],
  datasets: [
    {
      data: [15, 19, 10, 15, 3, 5],
      backgroundColor: [
        "rgba(255, 206, 86, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 206, 86, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};


const DoughnutChart = () => (
  <>
    <section className="doughnut">
      <Typography variant="h6" gutterBottom className="tech-title">
        Technologies
      </Typography>
      <Doughnut data={data} />
    </section>
  </>
);

export default DoughnutChart;
