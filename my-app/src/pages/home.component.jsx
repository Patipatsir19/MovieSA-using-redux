import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Popular from "../components/movielist/popular/popular.component";
import { OutlineButton } from "../components/button/button.component";
import Slider from "../components/slider/slider.component";
import Toprate from "../components/movielist/toprate/toprate.componet";
import TVonair from "../components/Tvlist/onairTV/onairTV.component";
import TVpopular from "../components/Tvlist/popularTV/popularTV.component";
import TVtoprate from "../components/Tvlist/toprateTV/toprateTV.component";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <div className="container">
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending Movie</h2>
            <Link to="/movie">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <Popular />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rating</h2>
            <Link to="/movie">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <Toprate />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <TVpopular />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rating TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <TVtoprate />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>On Air</h2>
            <Link to="/tv">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <TVonair />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
