import React, { useEffect } from "react";
import * as d3 from "d3";

export default function BarChart() {
  useEffect(() => {
    draw();
  }, []);

  let draw = () => {
    d3.select("#bar_chart").select("svg").remove();

    let margin = { left: 30, bottom: 60, right: 10, top: 10 };
    let width = 600;
    let height = 120;

    let data = [
      { month: "2019-Jan", tweets: 9 },
      { month: "2019-Feb", tweets: 14 },
      { month: "2019-Mar", tweets: 18 },
      { month: "2019-April", tweets: 27 },
      { month: "2019-May", tweets: 58 },
      { month: "2019-June", tweets: 54 },
      { month: "2019-July", tweets: 147 },
      { month: "2019-Aug", tweets: 286 },
      { month: "2019-Sept", tweets: 284 },
      { month: "2019-Oct", tweets: 294 },
      { month: "2019-Nov", tweets: 274 },
      { month: "2019-Dec", tweets: 152 },
      { month: "2020-Jan", tweets: 59 },
      { month: "2020-Feb", tweets: 18 },
      { month: "2020-Mar", tweets: 67 },
    ];

    let svg = d3
      .select("#bar_chart")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(
        data.map((d) => {
          return d.month;
        })
      )
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

    let yScale = d3.scaleLinear().domain([0, 330]).range([height, 0]);

    svg.append("g").call(d3.axisLeft(yScale));

    let myColor = d3
      .scaleSequential()
      .domain([
        d3.min(data, (d) => d.tweets) - 50,
        d3.max(data, (d) => d.tweets),
      ])
      .interpolator(d3.interpolatePurples);

    svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.month))
      .attr("y", (d) => yScale(d.tweets))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.tweets))
      .attr("fill", (d) => myColor(d.tweets));
  };

  return <div id="bar_chart" className="chart"></div>;
}
