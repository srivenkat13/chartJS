import Chart from "chart.js/auto";

import { getDimensions } from "./api";

(async function () {
  const data = await getDimensions();

  console.log(data)

  new Chart(document.getElementById("dimensions"), {
    type: "bubble",
    options: {
      aspectRatio: 1,
      scales: {
        x: {
          max: 500
        },
        y : {
          max:500
        }
      }
    },
    data: {
      labels: data.map((x) => x.year),
      datasets: [
        {
          label: "Dimensions",
          data: data.map((row) => ({
            x: row.width,
            y: row.height,
            r: row.count,
          })),
        },
      ],
    },
  });
})();
