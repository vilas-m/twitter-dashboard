import React, { useEffect } from "react";
import * as d3 from "d3";
import { data } from "./treeMapData";

const TreeMap = () => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#treemap").select("svg").remove();

    let margin = { top: 10, right: 10, bottom: 10, left: 10 };
    let width = 640;
    let height = 250;
    let max = d3.max(data, (d) => d.value);
    let min = d3.min(data, (d) => d.value);

    let svg = d3
      .select("#treemap")
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
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var root = d3
      .stratify()
      .id(function (d) {
        return d.name;
      })
      .parentId(function (d) {
        return d.parent;
      })(data);
    root.sum(function (d) {
      return +d.value;
    });

    root.sort(function (a, b) {
      return b.value - a.value;
    });

    d3.treemap().size([width, height]).padding(4)(root).sort();

    let myColor = d3
      .scaleSequential()
      .domain([min - 30, max])
      .interpolator(d3.interpolatePurples);

    svg
      .selectAll("rect")
      .data(root.leaves())
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return d.x0;
      })
      .attr("y", function (d) {
        return d.y0;
      })
      .attr("width", function (d) {
        return d.x1 - d.x0;
      })
      .attr("height", function (d) {
        return d.y1 - d.y0;
      })
      .style("stroke", "none")
      .style("fill", (d) => {
        return myColor(d.value);
      });

    // and to add the text labels
    svg
      .selectAll("text")
      .data(root.leaves())
      .enter()
      .append("text")
      .attr("x", function (d) {
        return d.x0 + 10;
      }) // +10 to adjust position (more right)
      .attr("y", function (d) {
        return d.y0 + 20;
      }) // +20 to adjust position (lower)
      .text(function (d) {
        return d.data.name;
      })
      .attr("font-size", "15px")
      .attr("fill", "black");
  };

  return <div id="treemap">What type of group my tweets belong to?</div>;
};

export default TreeMap;
