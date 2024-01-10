import { Chart, plugins } from "chart.js/auto";

import { getAquisitionsByYear } from "./api";

(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 24 },
    { year: 2017, count: 27 },
    { year: 2018, count: 38 },
    { year: 2019, count: 28 },
    { year: 2020, count: 48 },
    { year: 2021, count: 18 },
    { year: 2022, count: 29 },
    { year: 2023, count: 20 },
    { year: 2024, count: 30 },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    // customize the chart
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions of year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
