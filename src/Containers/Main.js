import React from "react";
import BarChart from "../Charts/BarChart";
import TreeMap from "../Charts/TreeMap";
import WordCloud from "../Charts/WordCloud";

import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="left-half">
        <div className="l-content-1">My Twitter Dashboard</div>
        <div className="l-content-2 ">
          <div className="numbers">
            <div>
              Tweets <br />
              1.663
            </div>
            <div>
              Impressions <br />
              1.663
            </div>
            <div>
              Engagements <br />
              1.663
            </div>
            <div>
              Re-Tweets <br />
              1.663
            </div>
          </div>
        </div>
        <div className="l-content-3">
          <BarChart />
        </div>
        <div className="l-content-4">
          <TreeMap />
        </div>
      </div>
      <div className="right-half">
        <WordCloud />
      </div>
    </div>
  );
};

export default Main;
