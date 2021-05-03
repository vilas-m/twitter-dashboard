import React from "react";
import BarChart from "../Charts/BarChart";
import TreeMap from "../Charts/TreeMap";
import WordCloud from "../Charts/WordCloud";

import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="left-half">
        <div className="l-content-1 big-label">My Twitter Dashboard</div>
        <div className="l-content-2 ">
          <div className="numbers">
            <div className="lables">
              <div className="small-label">Tweets</div>
              <div className="big-label">1.663</div>
            </div>
            <div className="lables">
              <div className="small-label">Impressions</div>
              <div className="big-label">138.303</div>
            </div>
            <div className="lables">
              <div className="small-label">Engagements</div>
              <div className="big-label">19.316</div>
            </div>
            <div className="lables">
              <div className="small-label">Re-Tweets</div>
              <div className="big-label">1.351</div>
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
